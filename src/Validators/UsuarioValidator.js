const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const mongoose = require("mongoose");

const create = validateRequest({
    body: z.object({
        nome: z.string({ required_error: "Insira um nome." }),
        email: z.string({ required_error: "Insira um email." }).email("O email é inválido"),
        senha: z.string({ required_error: "Insira uma senha." }),
    })
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId(), "O id é inválido")
    })

});

const update = validateRequest({
    body: z.object({
        nome: z.string().optional(),
        email: z.string().email("O email é inválido").optional(),
        senha: z.string().optional(),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId(), "O id não é válido")
    })
});

module.exports = {
    create, destroy, update,
}