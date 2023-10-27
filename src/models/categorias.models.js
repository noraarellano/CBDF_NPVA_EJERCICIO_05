const {DataTypes} = require('sequelize')
const sequelize = require('../config/db') //Esta ya la tenemos establecida

const Categoria = sequelize.define('Categoria',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull: false
    }
})


Categoria.sync()
.then(()=>{
    console.log('Tabla Categoria creada o ya existente');
})
.catch((error)=>{
    console.error('Error al crear la tabla Categoria:',error);
})


module.exports=Categoria; //Para poder usar en otro modulo 