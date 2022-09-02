import express from 'express'
const cors = require('cors')
import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(cors())

app.use(express.json())



const proffys = [
    {   
        id: 1,
        name: "Diego Fernandes", 
        avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
        whatsapp: "6284789921",
        bio: "Entusiasta das melhores tecnologias de químicas avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 já passaram por uma das minhas explosões.",
        subject: "Química", 
        cost: "40",
        weekday: [0],
        time_from: [700],
        time_to: [1400]
    },
    {
        id: 2,
        name: "Mayk Brito", 
        avatar: "https://avatars.githubusercontent.com/u/6643122?v=4",
        whatsapp: "6542452322",
        bio: "Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: 'Aprenda a fazer dinheiro com isso'!",
        subject: "Educação Física", 
        cost: "60",
        weekday: [3],
        time_from: [900],
        time_to: [1900]
    }
]

const subject = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekday = [
    "Domingo",
    "Segunda",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]
    
route.get("/weekday", (req: Request, res: Response) => {
    res.json(weekday)
})

route.get("/subject", (req: Request, res: Response) => {
    res.json(subject)
})


route.get("/study", (req: Request, res: Response) => {
    console.log(req.query)
    res.json(proffys)
})


app.use(route)

app.listen(3333, () => 'server running on port 3333')