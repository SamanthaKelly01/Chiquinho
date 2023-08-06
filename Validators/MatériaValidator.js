const {z} = require("zod");
const {validateRequest} = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        título: z.string({required_error: "Insira um título."}),
    })
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido")})
    
});

const update = validateRequest({
    body: z.object({
        título: z.string(),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido")})
});

module.exports = {
    create, destroy, update,
}