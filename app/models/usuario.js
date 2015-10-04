// Example model\


module.exports = function (sequelize, DataTypes) {

  var usuario = sequelize.define('usuario', {
    id_usuario: DataTypes.INTEGER,
    password: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido_pat: DataTypes.STRING,
    apellido_mat: DataTypes.STRING,
    telefono: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // usuario.hasMany(models.Comments);
      }
    }
  });

  return usuario;
};

