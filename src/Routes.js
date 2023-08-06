const {Router}= require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const MateriaController = require("./Controllers/MatériaController");
const AnotacoesController = require("./Controllers/AnotaçõesController");
const UsuarioValidator = require("./Validators/UsuarioValidator")
const MateriaValidator = require("./Validators/MatériaValidator")
const AnotacoesValidator = require("./Validators/AnotaçõesValidator")

const rotas = Router();

//usuario
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios', UsuarioController.read);
rotas.delete('/usuarios/:id',UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios', UsuarioValidator.Update, UsuarioController.update);

//materia
rotas.post('/materias',MateriaValidator.create, MateriaController.create);
rotas.get('/materias', MateriaController.read);
rotas.delete('/materias/:id',MateriaValidator.destroy, MateriaController.delete);
rotas.put('/materias', MateriaValidator.Update, MateriaController.update);

//anotaçao
rotas.post('/anotacao',AnotacoesValidator.create, AnotacoesController.create);
rotas.get('/anotacao', AnotacoesController.read);
rotas.delete('/anotacao/:id',AnotacoesValidator.destroy, AnotacoesController.delete);
rotas.put('/anotacao', AnotacoesValidator.Update, AnotacoesController.update);

module.exports = rotas;