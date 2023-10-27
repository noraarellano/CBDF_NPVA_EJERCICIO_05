//Requerimos y declaraciones
const express = require('express');
const routesCategorias = require('./src/routes/categorias.route');
const routesClientes = require('./src/routes/clientes.route');
const routesProvedoores = require('./src/routes/proovedores.route');
const app = express();
const puerto = process.env.PORT || 3000;

//COMMIT ACTUALIZADO
//Configuracion del servidor

app.use(express.json())
app.use('/socios/v2/categorias',routesCategorias);
app.use('/socios/v2/clientes',routesClientes);
app.use('/socios/v2/provedoores',routesProvedoores);

//app.use('/socios/v2/categorias',routesClientes);

//Ejecutar servidor 
app.listen(puerto,()=>{
console.log("Servidor escuchando en el puerto:",puerto);
})