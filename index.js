const App = require("./App");
const Loaders = require("./src/Loaders/Index");


 const port = process.env.PORT || 8000; // Obtém a porta configurada das variáveis de ambiente ou usa a porta padrão 8000

Loaders.start();

// app.listen(port, () => {
//     console.log(`Servidor Rodando = Chiquinho feliz! Acesse http://localhost:${port}`);
// });

app.listen(8000, () => console.log(`Servidor Rodando = Chiquinho feliz! Acesse http://localhost:${port}`));