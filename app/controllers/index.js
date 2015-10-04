
var express = require('express'),
  router = express.Router(),
  db = require('../models');

  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'samael',
    database : 'dbzem'
  });
connection.connect();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/inicio', function (req, res, next) {
  res.render('index', {
            title: 'Ventas'
          });
});

router.post('/inicio', function (req, res, next) {
  var usu=req.body.usuario;
  var pass=req.body.pass;
  var estado;
  connection.query("select * from usuario where id_usuario="+usu+"", function(err, rows,fields){    
      if (err){
        res.redirect('/?w=ru');
      }

      if(rows.length>0){
        if(pass===rows[0].password){
          res.render('index', {
            title: 'Ventas',
            usuario: rows[0].nombre
          });
        }else{
          res.redirect('/?w=rp');
        }
      }else{
        res.redirect('/?w=ru');
      }
  });
});
