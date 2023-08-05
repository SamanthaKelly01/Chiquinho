const MateriaModel = require("../Models/MatériaModel");

class MateriaController{

    async create(req,res) {
        const materia = await MateriaModel.create(req.body);
        return res.status(200).json(materia);
    }

    async read(req,res) {
        const materias = await MateriaModel.find();
        return res.status(200).json(materias);
    }

    async update(req,res) {
        const id = req.params;
        const materia = await MateriaModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json(materia);
    }

    async delete(req,res) {
        const id = req.params; 
        await MateriaModel.findByIdAndDelete(id);
        return res.status(200).json({'mensagem': 'Matéria deletada.'})
    }
}

module.exports = new MateriaController();