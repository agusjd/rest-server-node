const {response} = require('express')

const messagesPost = (req,res=response) =>{
    const body = req.body;

    res.json({
        msg:body
    })
}

const messagesGet = (req,res=response) =>{
    res.json({
        msg: "prueba"
    })
}

module.exports ={
    messagesPost,
    messagesGet
}