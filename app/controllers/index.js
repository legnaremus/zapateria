
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
  var sku=req.query.id;
  if(sku){
    id=sku.slice(0, 9);
    color=sku.slice(9,11);
    talla=sku.slice(11,16);
    connection.query("select * from producto inner join zapato z inner join color c on c.nombre=z.color where z.id_producto="+id+
      " and id_color="+color+" and talla='"+talla+"' group by z.id_producto", function(err, rows,fields){    
      if(err){throw err;}
      if(rows){
        if(rows.length>0){
          res.render('index', {
            title: 'Ventas',
            usuario: usu

          });
        }
      }else{

      }
    });
  }
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