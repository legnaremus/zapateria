var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

var mysql = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'samael',
    database : 'dbzem'
  });
connection.connect();


router.get('/productos', function (req, res, next) {
  var usu=req.cookies['usuario'];
  if(usu=='undefined')
        res.redirect('/?w=is');
      
	var resul;
	var col;
	connection.query('select p.id_producto as Id_producto, p.descripcion as Descripcion,z.talla as Talla,z.color as Color,p.precio_venta as Precio,'+
		'z.cantidad as Cantidad	from producto as p inner join zapato as z using(id_producto)', function(err,rows,fields){
		if(err){throw err};
		resul=rows;	col=fields;
		tabla(rows,col,res,usu);
	});
});

var tabla=function( datos, col, res,usu){
	console.log(" Fuera " +datos[0].talla);
  res.render('productos', {
    usuario:usu,
  	resultado:datos,
  	columnas:col,
  	title: 'Almacen de productos'
  });
}
