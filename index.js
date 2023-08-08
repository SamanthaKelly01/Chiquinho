const Loaders = require("./src/Loaders/index");
const app = require("./App")
console.log("oi")
Loaders.start();

app.listen(3000, () => {
    console.log(`Servidor Rodando = Chiquinho feliz! Acesse http://localhost:3000`);
});
