const {Router}= require("express");
const UsuarioController = require("./Controllers/UsuarioController");

const rotas = Router();

rotas.post('/usuarios', UsuarioController.create); //criar um usuario 



module.exports = rotas;