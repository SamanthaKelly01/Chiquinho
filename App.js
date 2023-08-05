const express = require("express");
const rotas = require("./src/Routes")
const app = express();


app.use(rotas);
app.use(express.json());








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