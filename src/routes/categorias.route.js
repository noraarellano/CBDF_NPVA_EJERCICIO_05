const express = require('express')
const router = express.Router()
const categoriasController = require('../controlles/categorias.controller')

//Definir las rutas 

router.get('/',categoriasController.ObtenerTodasCategorias);
router.get('/:id',categoriasController.obtenerCategoriaPorId);
router.post('/',categoriasController.crearCategoria);
router.put('/:id',categoriasController.actualizarCategoria);
router.delete('/:id', categoriasController.eliminarCategoria);

module.exports=router;