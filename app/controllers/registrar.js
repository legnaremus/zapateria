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
      color: rows,
      id_zap:''
    });
  });
});

router.post('/registrar', function (req,res,next){
  var id=req.body.id_zap;
  if(insertar(req.body))
    var men='ok'
  else var men='dont'
  connection.query("select * from color", function(err, rows,fields){
    var usu=req.cookies['usuario'];
      if(usu=='undefined')
        res.redirect('/?w=is');
    res.render('registrar', {
        usuario:usu,
        title: 'Registrar Producto Post',
        color: rows,
        alerta:undefined,
        mensaje:men,
        id_zap:id
      });
  });

});

var insertar=function(datos){
  var insert='insert into producto values("'+datos.id_zap+'","'+datos.descripcion+
    '",'+datos.precio_c+','+datos.precio_v+')';
  connection.query(insert, function(err, rows,fields){
    if (err){
      console.log('Insersion no realizada: ',err);
      return false;
    }

  });

  var go=false;
  var tallas={};
  for(var ll in datos){
    if(go){
      if(datos[ll]!="")
        tallas[''+ll] =datos[ll];
    }
    if(ll=='precio_v') go=true;
  }
  console.log('ta: ',tallas);
  for(var talla in tallas){
    var insert='insert into zapato values("'+datos.id_zap+'","'+datos.color+
      '","'+talla+'","'+tallas[talla]+'")';
    console.log(insert);
    connection.query(insert, function(err, rows,fields){
      if (err){
        console.log('Insersion no realizada: ',err);
      }
    });
  }
  return true;
};

var mapear=function(cad){
  var salida='';
  for(var i=1;i<cad.length;i++) salida+=cad[i];  
  return salida;
};
