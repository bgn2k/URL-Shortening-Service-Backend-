import mongoose from 'mongoose'
import express from 'express'
const app = express()
export async function connectMongo(url, PORT) {
    mongoose.connect(url).then(() => {
        console.log('Mongo DB Connected')
    })
    .catch((error) => {
        console.log('Mongo DB Connectin Failed : ', error)
    })

}
export default{
    connectMongo
}