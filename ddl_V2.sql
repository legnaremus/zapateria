create table usuario(
	id_usuario varchar(15) primary key,
	password varchar(20),
	nombre varchar(60),
	apellido_pat varchar(60),
	apellido_mat varchar(60),
	telefono varchar(12)
);

create table producto(
	id_producto varchar(15) primary key,
	descripcion varchar(180),
	precio_compra double(8,2),
	precio_venta double(8,2)
);

create table zapato(
	id_producto varchar(15),
	color varchar(30),
	talla varchar(10),
	cantidad int,
	CONSTRAINT fkzap FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

create table bolsa(
	id_producto varchar(15),
	color varchar(30),
	cantidad int,
	CONSTRAINT fkbolpro FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

create table cosmetico(
	id_producto varchar(15),
	cantidad int,
	CONSTRAINT fkcos FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

create table cinturon(
	id_producto varchar(15),
	color varchar(30),
	talla varchar(10),
	cantidad int,
	CONSTRAINT fkcin FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

create table cartera(
	id_producto varchar(15),
	color varchar(30),
	cantidad int,
	CONSTRAINT fkcar FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

create table promocion(
	id_descuento int primary key,
	descripcion varchar(60),
	porcentaje int
);

create table venta(
	id_venta int primary key,
	id_usuario varchar(15),
	fecha datetime,
    CONSTRAINT fkven FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

create table detalle_venta(
	id_venta int,
	id_producto varchar(15),
	descripcion varchar(140),
	cantidad int,
	descuento varchar(60),
	precio double(8,2),
	CONSTRAINT fkdven FOREIGN KEY (id_venta) REFERENCES venta(id_venta),
    CONSTRAINT fkdvpro FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
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
	id_venta int,
	fecha date,
	importe double(8,2),
	CONSTRAINT creVent FOREIGN KEY (id_venta) REFERENCES venta(id_venta),
	CONSTRAINT creClien FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);
create table configuracion{
	ganancia double
}
create table color(
	id_color int primary key auto_increment,
	nombre varchar(30)
);