import database from "../infra/database.js";
import DicasModel from "../model/DicasModel.js"

class Dicas{
    static rotas(app){
        app.get("/dica", (req, res) => {
            const aleatoria =  Math.round(Math.random() * (database.length - 1));
            console.log(aleatoria);
            res.json(database[aleatoria])
        })

        app.post("/criar", (req, res) => {
            const corpo = req.body
            console.log(corpo)
            const dica = new DicasModel(corpo.dica, corpo.autor)
            database.push(dica)
            res.json({erro: false, message: "Dica cadastrada com sucesso!"})
        })
    }
}

export default Dicas