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
	var usu=req.cookies['usuario'];
	if(usu=='undefined')
        res.redirect('/?w=is');
	var id=req.query.id_producto;
	var color=req.query.colores;
	if(id){
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
			      title: 'Agregar A Stock',
			      mensaje:''

		    	});
			}else{
				res.render('agregar', {
			    	id: '',
			    	color: '',
			    	marca: '',
			    	modelo: '',
			      title: 'Agregar A Stock',
			      mensaje:'Id no existente'
		    	});
			}
		});
  }else{
		console.log("ENtre al sin parametros");
		res.render('agregar',
		{
			id:'',
			color:[],
			marca:'',
			modelo:'',
			title:'Agregar A Stock',
			mensaje:''

		});
  }  
});

// var mapear=function(res){
// 	var salida=[];
// 	for (var i = res.length - 1; i >= 0; i--) {
// 		salida.push({res[i].talla:res[i].cantidad});
// 	};
// }