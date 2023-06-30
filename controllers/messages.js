const {response,request} = require('express')

const Message = require('../models/message')

const messagesPost = async (req,res=response) =>{
    const body = req.body;
    const message = new Message(body)

    await message.save();
    res.json({
        msg:message
    })
}

const messagesGet = async (req,res=response) =>{
    const {limit = 5, from = 0} = req.query
    const messages = await Message.find()
        .limit(Number(limit))
        .skip(Number(from))

    res.json({
        messages
    })
}

module.exports ={
    messagesPost,
    messagesGet
}