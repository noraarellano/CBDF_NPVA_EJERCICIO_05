//Establecer la conexion con un dialecto = MySQL
const {Sequelize} = require('sequelize');
const db = process.env.MYSQLDATABASE || 'tienda';
const user = process.env.MYSQLUSER || 'root';
const password = process.env.MYSQLPASSWORD || ''; //render.com
const sequelize = new Sequelize('tienda','root','',{
    host: 'localhost',
    dialect: 'mysql'

});


try{
     sequelize.authenticate();
    console.log("Conexion a la base de datos exitosa")
} catch(error){
    console.error("No se pudo establecer la conexion",error)
}

//Para poder usar esta conexion en los controladores
module.exports=sequelize;