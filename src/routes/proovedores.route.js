const express = require('express')
const router = express.Router()
const provedooresController = require('../controlles/provedoores.controller')

//Definir las rutas 

router.get('/',provedooresController.ObtenerTodosProvedoores);
router.get('/:id',provedooresController.obtenerProvedoorPorId);
router.post('/',provedooresController.crearProvedoor);
router.put('/:id',provedooresController.actualizarProvedoor);
router.delete('/:id', provedooresController.eliminarProvedoor);

module.exports=router;