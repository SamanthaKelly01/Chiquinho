const AnotacoesModel = require("../Models/AnotaçõesModel");

class AnotacoesController{
    async create(req,res) {
        const anotacao = await AnotacoesModel.create(req.body);
        return res.status(200).json(anotacao);
    }

    async read(req,res) {
        const anotacoes = AnotacoesModel.find();
        return res.status(200).json(anotacoes);
    }

    async update(req,res) {
        const id = req.params;
        const anotacao = await AnotacoesModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json(anotacao);
    }

    async delete(req,res) {
        const id = req.params;
        await AnotacoesModel.findByIdAndDelete(id);
        return res.status(200).json({'mensagem': 'Anotação deletada.'})
    }

}

module.exports = new AnotacoesController();