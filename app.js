import express from "express";
import Dicas from "./src/controller/dicas.js";

const app =  express()

const port = 3000


app.listen(port, () => {
    console.log(`Acesso ao servidor por http://localhost:${port}`);
})

app.use(express.json)
Dicas.rotas(app)

