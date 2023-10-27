    const Provedoor = require('../models/provedoores.model')

//Todos los provedoores -- SELECT * provedoores
exports.ObtenerTodosProvedoores = async(req,res)=>{
    try{
        const provedoores = await Provedoor.findAll();
        res.status(200).json({
            estado: 1,
            mensaje:"Provedoores encontrados",
            provedoores : provedoores
        })
    }catch(error){
    res.status(500).json({
        estado:0,
        mensaje: "ocurrio un error desconocido",
    
    })
    }
    }

    //un provedoor por id 
exports.obtenerProvedoorPorId = async(req,res)=>{
    const {id} = req.params;
    try {
        const provedoor = await Provedoor.findByPk(id)
        if (provedoor == null) {
            res.status(404).json({
                estado:0,
                mensaje: "Provedoor no encontrado"
            })
        } else{
            res.status(200).json({
                estado:1,
                mensaje: "Provedoor encontrado",
                provedoor: provedoor
            })
    
        }
    } catch (error) {
        res.status(500).json({
            estado:0,
            mensaje:"Ocurrio un error desconocido"
        })
    }
    }

exports.crearProvedoor = async(req,res)=>{
    const{id} = req.params;
    const {nombre,direccion,telefono} = req.body;
    try{
        if(nombre == undefined || direccion == undefined || telefono == undefined){
            res.status(400).json({
                estado:0,
                mensaje: "Bad Request - Faltan parametros"
            }) 
        }else{
            const provedoor = await Provedoor.create({id: id,nombre:nombre,direccion:direccion,telefono:telefono});
            res.status(200).json({
                estado: 1,
                mensaje: "Provedoor creado correctamente",
                provedoor: provedoor
            })
            }
        }
    
     catch (error){
    res.status(500).json({
        estado:0,
        mensaje: "Ocurrio un error desconocido"
    })
    }
     }

     //Actualizar 
exports.actualizarProvedoor = async(req,res)=>{
 //Buscamos el provedoor
 const{id} = req.params;
 const {nombre,direccion,telefono} = req.body;
 try {
     const provedoor = await Provedoor.findByPk(id);
     if (provedoor == null ) {
         res.status(404).json({
             estado:0,
             mensaje:"Provedoor no encontrado"
         })
     } else {
         if (nombre == undefined || direccion == undefined || telefono== undefined) {
             res.status(400).json({
                 estado:0,
                 mensaje:"Faltan parametros"
             })
         }else{
await provedoor.update({id: id, nombre:nombre,direccion:direccion,telefono:telefono})
res.status(200).json({
 estado:1,
 mensaje:"Provedoor actualizado con exito"
})

         }
     }
 } catch (error) {
     res.status(500).json({
         estado:0,
         mensaje:"Ocurrio un error desconocido"
     })
 }
 //Actualizamos
 //Guardamos



}
//Eliminar 
exports.eliminarProvedoor= async(req,res)=>{
const {id} = req.params
try {
    const provedoor = await Provedoor.findByPk(id);
    if (provedoor == null) {
        res.status(400).json({
            estado:0,
            mensaje:"Provedoor no encontrado"
        })
    } else {
        await provedoor.destroy();
        res.status(200).json({
            estado:1,
            mensaje:"Provedoor eliminado con exito"
        })
    }
} catch (error) {
    res.status(500).json({
        estado:0,
        mensaje:"Ocurrio un error desconocido"
    })
}
}