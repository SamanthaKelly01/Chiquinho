const {Router}= require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const MateriaController = require("./Controllers/MatériaController");
const AnotacoesController = require("./Controllers/AnotaçõesController");

const rotas = Router();

//usuario
rotas.post('/usuarios', UsuarioController.create);
rotas.get('/usuarios', UsuarioController.read);
rotas.delete('/usuarios/:id', UsuarioController.delete);

//materia
rotas.post('/materias', MateriaController.create);
rotas.get('/materias', MateriaController.read);
rotas.delete('/materias/:id', MateriaController.delete);

//anotaçao
rotas.post('/anotacao', AnotacoesController.create);
rotas.get('/anotacao', AnotacoesController.read);
rotas.delete('/anotacao/:id', AnotacoesController.delete);

module.exports = rotas;