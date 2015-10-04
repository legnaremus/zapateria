var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',user: 'root',password : 'samael',database : 'dbzem'
  });
connection.connect();


router.get('/agregar', function (req, res, next) {
	var id=req.query.id_producto;
	var color=req.query.colores;
	if(id){
		if(color!='nll'){
			console.log("ENtre al  color");
			connection.query('select talla,cantidad,color,modelo,marca from zapato inner join producto as p using(id_producto) where p.id_producto='+id+' and color= "'+color+'"', function(err,rows,fields){
				if(err){throw err;}
				if(rows.length>0){
					res.render('agregar', {
				    	id: id,
				    	color: rows,
				    	marca: rows[0].marca,
				    	modelo: rows[0].modelo,
				    	tallas:rows,
				      title: 'Agregar A Stock'
			    	});
				}
			});

		}else{
			connection.query('select color, marca, modelo from zapato inner join'+
				' producto using(id_producto) where id_producto='+id+' group by color',
					function(err,rows,fields){
				if(err){throw err;}
				if(rows.length>0){
					console.log("ENtre al solo Id");
					res.render('agregar', {
				    	id: id,
				    	color: rows,
				    	marca: rows[0].marca,
				    	modelo: rows[0].modelo,
				      title: 'Agregar A Stock'
			    	});
				}
			});
		}
  }else{
		console.log("ENtre al sin parametros");
		res.render('agregar',
		{
			id:'',
			color:[],
			marca:'',
			modelo:'',
			title:'Agregar A Stock'
		});
  }  
});

// var mapear=function(res){
// 	var salida=[];
// 	for (var i = res.length - 1; i >= 0; i--) {
// 		salida.push({res[i].talla:res[i].cantidad});
// 	};
// }