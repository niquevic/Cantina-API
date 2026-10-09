const express = require("express")
const app = express()

app.use(express.json())

const pratos = [
    { id: 1, nome: "Lasanha", descricao: "Massa artesanal com molho bolonhesa, queijo e presunto" , preco: 29.00},
    { id: 2, nome: "Macarrão", descricao: "Massa fresca com molho pesto" , preco: 17.00},
]

proximoId = 3

app.get("/pratos", (req, res) => {
    res.json(pratos)
})

app.post("/pratos", (req, res) => {
    const {nome,descricao,preco} = req.body 
    
    if(!nome || !descricao || !preco){
        return res.status(400).json({error: "titulo autor obrigatórios"})
    }

    const novoPrato = {
        id: proximoId,
        nome,
        descricao,
        preco
    }

    pratos.push(novoPrato)
    proximoId++
    res.status(201).json(novoPrato)
})

app.listen(3000, () => console.log("API rodando em localhost:3000"))