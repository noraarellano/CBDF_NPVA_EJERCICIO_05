const {DataTypes} = require('sequelize')
const sequelize = require('../config/db') //Esta ya la tenemos establecida

const Provedoor = sequelize.define('Provedoor',{
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


Provedoor.sync()
.then(()=>{
    console.log('Tabla Provedoor creada o ya existente');
})
.catch((error)=>{
    console.error('Error al crear la tabla Provedoor:',error);
})


module.exports=Provedoor;