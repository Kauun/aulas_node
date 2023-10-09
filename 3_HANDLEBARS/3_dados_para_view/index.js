const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//CONFIGURANDO O HANDLEBARS COMO TEMPLATE ENGINE
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const usuario = {
        nome: "Kauan",
        profissao: "Analista N1",
        idade: "20"
    }

    res.render('home', { usuario })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})