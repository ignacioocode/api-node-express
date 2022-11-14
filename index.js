import express from "express";
import 'dotenv/config'
import './database/mongo.js'
import router from './routes/auth.route.js'

const app = express()
app.use(express.json())

app.use('/api/v1', router)

app.listen(5000, () => console.log('conectado al puerto 5000'))