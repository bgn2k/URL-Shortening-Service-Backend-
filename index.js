import express from 'express'
const app = express()
import router from './src/routes/url.js'
import { connectMongo } from './connect.js'
const PORT = 8000
app.use(express.json())
app.use('/url', router)

const connectString = 'mongodb+srv://bgnarendra:bgn_2000@learnnodejs.yxl7k.mongodb.net/short-url?retryWrites=true&w=majority&appName=learnNodeJS'
connectMongo(connectString, PORT)
app.listen(PORT, () => {
    console.log(`Server up and running on PORT : ${PORT}`)
})