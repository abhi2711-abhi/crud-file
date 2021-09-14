const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

const abhishek = new mongoose.model('Product',productSchema)
module.exports = abhishek