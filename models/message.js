const {Schema, model} =require('mongoose')

const MessageSchema = Schema({
    name:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    email:{
        type:String,
        required:[true,"El email es obligatorio"]
    },
    message:{
        type:String,
        required:[true,"El mensaje es obligatorio"]
    },
})

module.exports = model('Message', MessageSchema)