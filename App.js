const express = require("express");
const rotas = require("./src/Routes")
const app = express();

const port = process.env.PORT || 8000; // Obtém a porta configurada das variáveis de ambiente ou usa a porta padrão 8000

app.get("", (req, res) => {
    return res.json({
        message: "Geral"
    });
});

app.get("/cadastro", (req, res) => {
    return res.json({
        message: "Cadastro"
    });
});

app.get("/*", (req, res) => {
    const notFoundMessage = `
        <html>
        <body>
            <p>Página não encontrada. Clique <a href="http://localhost:${port}">aqui</a> para voltar à página principal.</p>
        </body>
        </html>
    `;
    return res.status(404).send(notFoundMessage);
});

app.use(rotas);

app.listen(port, () => {
    console.log(`Servidor Rodando = Chiquinho feliz! Acesse http://localhost:${port}`);
});




module.exports = app;