const express = require('express')
const router = express.Router()
const clientesController = require('../controlles/clientes.controller')

//Definir las rutas 

router.get('/',clientesController.ObtenerTodosClientes);
router.get('/:id',clientesController.obtenerClientePorId);
router.post('/',clientesController.crearCliente);
router.put('/:id',clientesController.actualizarCliente);
router.delete('/:id', clientesController.eliminarCliente);

module.exports=router;