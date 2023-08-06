const {z} = require("zod");
const {validateRequest} = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        nome: z.string({required_error: "Insira um nome."}),
        email: z.string({required_error: "Insira um email."}).email("O email é inválido"),
        senha: z.string({required_error: "Insira um senha."}),
    })
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido")})
    
});

const update = validateRequest({
    body: z.object({
        nome: z.string().opitional(),
        email: z.string().email("O email é inválido").opitional(),
        senha: z.string().opitional(),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido")})
});

module.exports = {
    create, destroy, update,
}