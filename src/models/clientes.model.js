const {DataTypes} = require('sequelize')
const sequelize = require('../config/db') //Esta ya la tenemos establecida

const Cliente = sequelize.define('Cliente',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull: false
    },
    direccion:{
        type:DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type:DataTypes.STRING,
        allowNull: false
    }
})


Cliente.sync()
.then(()=>{
    console.log('Tabla Cliente creada o ya existente');
})
.catch((error)=>{
    console.error('Error al crear la tabla Cliente:',error);
})


module.exports=Cliente; //Para poder usar en otro modulo 