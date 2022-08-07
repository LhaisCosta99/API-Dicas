import database from "../infra/database.js";
import DicasModel from "../model/DicasModel.js"

class Dicas{
    static rotas(app){
        app.get("/dica", (req, res) => {
            const aleatoria =  Math.random() * (database.length - 0) + 0;
            res.json(database[aleatoria])
        })

        app.post("/dica", (req, res) => {
            const corpo = req.body
            const dica = new DicasModel(corpo.dica, corpo.autor)
            database.push(dica)
            res.json({erro: false, message: "Dica cadastrada com sucesso!"})
        })
    }
}

export default Dicas