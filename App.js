const express = require("express");
const rotas = require("./src/Routes")
const cors = require("cors")
//const port = process.env.PORT || 8000; // Obtém a porta configurada das variáveis de ambiente ou usa a porta padrão 8000

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(rotas);

app.use("*", (req, res) => {
    res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada.` })
})

module.exports = app;
// app.get("", (req, res) => {
//     return res.json({
//         message: "Geral"
//     });
// });

// app.get("/cadastro", (req, res) => {
//     return res.json({
//         message: "Cadastro"
//     });
// });

// app.get("/*", (req, res) => {
//     const notFoundMessage = `
//         <html>
//         <body>
//             <p>Página não encontrada. Clique <a href="http://localhost:${port}">aqui</a> para voltar à página principal.</p>
//         </body>
//         </html>
//     `;
//     return res.status(404).send(notFoundMessage);
// });

