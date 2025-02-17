import mongoose from 'mongoose'
const urlSchema = new mongoose.Schema({
    shortId : {
        type:String,
        required : true,
        unique : true
    },
    redirectId : {
        type : String,
        required : true
    },
    visitHistory : [{
        timeStamp : {
            type : Number
        }
    }]
},{timestamps : true})
const URL = mongoose.model('urls', urlSchema)
export default URL