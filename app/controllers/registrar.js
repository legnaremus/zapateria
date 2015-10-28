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

router.get('/registrar', function (req, res, next) {
  connection.query("select * from color", function(err, rows,fields){
  	var usu=req.cookies['usuario'];
  	if(usu=='undefined')
      res.redirect('/?w=is');
    res.render('registrar', {
    	usuario:usu,
      title: 'Registrar Producto',
      color: rows
    });
  });
});

router.post('/registrar', function (req,res,next){
  connection.query("select * from color", function(err, rows,fields){
    var usu=req.cookies['usuario'];
      if(usu=='undefined')
        res.redirect('/?w=is');
    res.render('registrar', {
        usuario:usu,
        title: 'Registrar Producto Post',
        color: rows,
        mensaje:'Bien'
      });
  });
});