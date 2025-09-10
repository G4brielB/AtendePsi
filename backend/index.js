import express from "express"
import mysql from "mysql2/promise"
import cors from "cors"
import { fileURLToPath } from 'url'
import path from "path"
import multer from "multer"
import bcrypt from "bcrypt"
import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({path: path.resolve(__dirname, ".env") })

const app = express()
const port = 3001
const upload = multer()


const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))





app.get('/', async (req ,res) => {
    try{
        const [results] = await connection.query(
            "SELECT * FROM users"
        )
        res.status(200).json({
            status: 'success',
            data: results
        })
        console.log(results)
    }catch(e){
        console.log(e)
    }
    

})

app.post('/users', upload.none() , async (req, res) => {
    try{
        const {user, email, phone, userType, password} = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const sql = "INSERT INTO users (name, email, phone, userType, password) VALUES (?,?,?,?,?)"
        const results = await connection.query(sql,[user, email, phone, userType, hashedPassword])
        res.status(201).send({id: results.insertId, message: "Usuario cadastrado com sucesso"})


    }catch(err){
        res.status(500).json({success: false})
        console.log(`Seguinte erro: ${err}`)
    }
})



/*INICIO AGENDAMENTOS */

app.get("/scheduling", async (req, res) => {
    try{

        const sql = "SELECT * FROM scheduling"
        const [results] = await connection.query(sql)
        res.status(200).json({
            success: true,
            data: results
        })


    }catch(err){
        console.log(err)
    }
})

app.post("/api/scheduling", upload.none() ,async (req, res) => {
    try{
        
        const {user, email, phone, dia, hora, sessao} = req.body

        const sql = 'INSERT INTO scheduling (nome, email, phone, dia, hora, sessao) VALUES (?, ?, ?, ?, ?, ?)'

        const [results] = await connection.query(sql, [user, email, phone, dia, hora, sessao])

        res.status(201).send({id: results.insertId, message: "Agendado com succeso"})

    }catch(err){
        console.log(err)
        res.status(500).json({message: err})
    }
})

app.put("/scheduling/:id", (req, res) => {

    try{
        const {id} = req.params
        const {nome, email, phone, dia, hora, sessao} = req.body

        const sql = "UPDATE scheduling SET nome = ?, email = ?, phone = ?, dia = ?, hora = ?, sessao = ? WHERE id = ? "
        connection.query(sql, [nome, email, phone, dia, hora, sessao, id])

        res.json({
            success: true,
            id, nome, email, phone, dia, hora, sessao
        })


    }catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message: err})
    }

})

app.delete('/scheduling/:id', (req, res) => {
    try{
        const {id} = req.params

        const sql = 'DELETE FROM scheduling WHERE id = ?'
        connection.query(sql, [id])
        res.status(200).json({
            success: true,
            message: 'Usuario deletado'
        })


    }catch(err){
        
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        })
        
        console.log(`Seguinte erro: ${err}`)}
})



app.listen(port, () => {
    console.log("rondando em localhost:3001")
})