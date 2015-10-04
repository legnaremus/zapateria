create table usuario(
	id_usuario int primary key,
	password varchar(20),
	nombre varchar(60),
	apellido_pat varchar(60),
	apellido_mat varchar(60),
	telefono varchar(12)
);
create table proveedor(
	id_proveedor int primary key,
	nombre varchar(60),
	direccion varchar(60),
	telefono varchar(60),
	email varchar(60)
);
create table producto(
	id_producto int primary key,
	descripcion varchar(180),
	precio_compra double(4,2),
	precio_venta double(4,2),
	marca varchar(60),
	modelo varchar(60),
	id_proveedor int,
	CONSTRAINT fkprodpro FOREIGN KEY (id_proveedor) REFERENCES proveedor(id_proveedor)
);
create table articulo(
	id_articulo int primary key
);
create table zapato(
	id_articulo int unique,
	id_producto int,
	color varchar(30),
	talla varchar(10),
	cantidad int,
	CONSTRAINT fkzapAr FOREIGN KEY (id_articulo) REFERENCES articulo(id_articulo),
	CONSTRAINT fkzap FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);
create table bolsa(
	id_articulo int unique,
	id_producto int,
	color varchar(30),
	cantidad int,
	CONSTRAINT fkbolar FOREIGN KEY (id_articulo) REFERENCES articulo(id_articulo),
	CONSTRAINT fkbolpro FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);
create table cosmetico(
	id_articulo int unique,
	id_producto int,
	cantidad int,
	CONSTRAINT fkcosAr FOREIGN KEY (id_articulo) REFERENCES articulo(id_articulo),
	CONSTRAINT fkcos FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);
create table cinturon(
	id_articulo int unique,
	id_producto int,
	color varchar(30),
	talla varchar(10),
	cantidad int,
	CONSTRAINT fkcinAr FOREIGN KEY (id_articulo) REFERENCES articulo(id_articulo),
	CONSTRAINT fkcin FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);
create table cartera(
	id_articulo int unique,
	id_producto int,
	color varchar(30),
	cantidad int,
	CONSTRAINT fkcartAr FOREIGN KEY (id_articulo) REFERENCES articulo(id_articulo),
	CONSTRAINT fkcar FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);
create table descuento(
	id_descuento int primary key,
	descripcion varchar(60),
	porcentaje int
);
create table descuento_articulo(
	id_descuento int,
	id_articulo int
);
create table compra(
	id_compra int primary key,
	id_proveedor int,
	fecha date
);
create table detalle_compra(
	id_detalle_compra int primary key,
	comentario varchar (180),
	id_compra int,
	id_articulo int,
	cantidad int,
	CONSTRAINT fkdc FOREIGN KEY (id_compra) REFERENCES compra(id_compra)
);

create table venta(
	id_venta int primary key,
	id_usuario int,
	fecha date,
	hora time
);

create table detalle_venta(
	id_detalle_venta int primary key,
	id_venta int,
	id_articulo int,
	cantidad int,
	descuento varchar(60),
	precio double(4,2),
	CONSTRAINT fkdv FOREIGN KEY (id_venta) REFERENCES producto(id_producto)
);

create table cliente(
	id_cliente int primary key,
	nombre varchar (60),
	apellido_pat varchar(60),
	apellido_mat varchar(60),
	telefono varchar(12),
	email varchar(60)
);

create table credito(
	id_credito int primary key,
	id_cliente int,
	fecha date,
	descripcion varchar(60),
	importe double(4,2),
	CONSTRAINT creClien FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);
