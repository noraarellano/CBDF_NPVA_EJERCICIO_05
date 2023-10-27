const Cliente = require('../models/clientes.model')

//Todos los clientes -- SELECT * clientes
exports.ObtenerTodosClientes = async(req,res)=>{
    try{
        const clientes = await Cliente.findAll();
        res.status(200).json({
            estado: 1,
            mensaje:"Clientes encontrados",
            clientes : clientes
        })
    }catch(error){
    res.status(500).json({
        estado:0,
        mensaje: "ocurrio un error desconocido",
    
    })
    }
    }

    //un cliente por id 
exports.obtenerClientePorId = async(req,res)=>{
    const {id} = req.params;
    try {
        const cliente = await Cliente.findByPk(id)
        if (cliente == null) {
            res.status(404).json({
                estado:0,
                mensaje: "Cliente no encontrada"
            })
        } else{
            res.status(200).json({
                estado:1,
                mensaje: "Cliente encontrado",
                cliente: cliente
            })
    
        }
    } catch (error) {
        res.status(500).json({
            estado:0,
            mensaje:"Ocurrio un error desconocido"
        })
    }
    }

//crear un cliente
exports.crearCliente = async(req,res)=>{
    const{id} = req.params;
    const {nombre,direccion,telefono} = req.body;
    try{
        if(nombre == undefined || direccion == undefined || telefono == undefined){
            res.status(400).json({
                estado:0,
                mensaje: "Bad Request - Faltan parametros"
            }) 
        }else{
            const cliente = await Cliente.create({id: id,nombre:nombre,direccion:direccion,telefono:telefono});
            res.status(200).json({
                estado: 1,
                mensaje: "Cliente creado correctamente",
                cliente: cliente
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

     //Actualizar cliente
exports.actualizarCliente = async(req,res)=>{
 //Buscamos el cliente
 const{id} = req.params;
 const {nombre,direccion,telefono} = req.body;
 try {
     const cliente = await Cliente.findByPk(id);
     if (cliente == null ) {
         res.status(404).json({
             estado:0,
             mensaje:"Cliente no encontrado"
         })
     } else {
         if (nombre == undefined || direccion == undefined || telefono== undefined) {
             res.status(400).json({
                 estado:0,
                 mensaje:"Faltan parametros"
             })
         }else{
await cliente.update({id: id, nombre:nombre,direccion:direccion,telefono:telefono})
res.status(200).json({
 estado:1,
 mensaje:"Cliente actualizado con exito"
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
//Eliminar cliente
exports.eliminarCliente = async(req,res)=>{
const {id} = req.params
try {
    const cliente = await Cliente.findByPk(id);
    if (cliente == null) {
        res.status(400).json({
            estado:0,
            mensaje:"Cliente no encontrado"
        })
    } else {
        await cliente.destroy();
        res.status(200).json({
            estado:1,
            mensaje:"Cliente eliminado con exito"
        })
    }
} catch (error) {
    res.status(500).json({
        estado:0,
        mensaje:"Ocurrio un error desconocido"
    })
}
}