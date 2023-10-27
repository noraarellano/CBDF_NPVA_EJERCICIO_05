const Categoria = require('../models/categorias.models')

//Todas las categorias -- SELECT * categorias
exports.ObtenerTodasCategorias = async(req,res)=>{
try{
    const categorias = await Categoria.findAll();
    res.status(200).json({
        estado: 1,
        mensaje:"Categorias encontradas",
        categorias : categorias
    })
}catch(error){
res.status(500).json({
    estado:0,
    mensaje: "ocurrio un error desconocido",

})
}
}

//una categoria por id 
exports.obtenerCategoriaPorId = async(req,res)=>{
const {id} = req.params;
try {
    const categoria = await Categoria.findByPk(id)
    if (categoria == null) {
        res.status(404).json({
            estado:0,
            mensaje: "Categoria no encontrada"
        })
    } else{
        res.status(200).json({
            estado:1,
            mensaje: "Categoria encontrada",
            categoria: categoria
        })

    }
} catch (error) {
    res.status(500).json({
        estado:0,
        mensaje:"Ocurrio un error desconocido"
    })
}
}
//crear una categoria 
exports.crearCategoria = async(req,res)=>{
const { descripcion} = req.body;
try{
    if(descripcion == undefined){
        res.status(400).json({
            estado:0,
            mensaje: "Bad Request - Faltan parametros"
        }) 
    }else{
        const categoria = await Categoria.create({descripcion:descripcion});
        res.status(200).json({
            estado: 1,
            mensaje: "Categoria creada correctamente",
            categoria: categoria
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

//Actualizar categria 
exports.actualizarCategoria = async(req,res)=>{
    //Buscamos la categoria
    const{id} = req.params;
    const {descripcion} = req.body;
    try {
        const categoria = await Categoria.findByPk(id);
        if (categoria == null ) {
            res.status(404).json({
                estado:0,
                mensaje:"Categoria no encontrada"
            })
        } else {
            if (descripcion == undefined) {
                res.status(400).json({
                    estado:0,
                    mensaje:"Faltan parametros"
                })
            }else{
await categoria.update({descripcion:descripcion})
res.status(200).json({
    estado:1,
    mensaje:"Categoria actualizada con exito"
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
//Eliminar categoria 
exports.eliminarCategoria = async(req,res)=>{
const {id} = req.params
try {
    const categoria = await Categoria.findByPk(id);
    if (categoria == null) {
        res.status(400).json({
            estado:0,
            mensaje:"Categoria no encontrada"
        })
    } else {
        await categoria.destroy();
        res.status(200).json({
            estado:1,
            mensaje:"Categoria eliminada con exito"
        })
    }
} catch (error) {
    res.status(500).json({
        estado:0,
        mensaje:"Ocurrio un error desconocido"
    })
}
}
