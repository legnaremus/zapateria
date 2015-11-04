
var express = require('express'),
  router = express.Router(),
  db = require('../models');

  var mysql      = require('mysql');
  var connection = mysql.createConnection({host     : 'localhost',user: 'root',password : 'samael',database : 'dbzem'});
  connection.connect();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/inicio',function (req,res,next){
  var usu=req.cookies['usuario'];
  if(usu=='undefined')
        res.redirect('/?w=is'); 

  res.render('index', {
            title: 'Ventas',
            usuario: usu
          });

});

router.post('/inicio', function (req, res, next) {
  var usu=req.body.usuario;
  var pass=req.body.pass;
  var estado;
  connection.query("select * from usuario where id_usuario='"+usu+"'", function(err, rows,fields){    
      if (err){
        connection.end();
        res.redirect('/?w=ru');
      }
      if(rows)
       if(rows.length>0){ 
        if(pass===rows[0].password){
          // definimos la cookie
          res.cookie('usuario',rows[0].nombre);
          res.cookie('obj',{1:"uno",2:'dos'});
          connection.end();
          res.render('index', {
            title: 'Ventas',
            usuario: rows[0].nombre
          });
        }else{
          connection.end();
          res.redirect('/?w=rp');
        }
      }else{
        connection.end();
        res.redirect('/?w=ru');
      }
  });
});
