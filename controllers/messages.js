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
    const {limit = 10, from = 0} = req.query
    const messages = await Message.find()
        .limit(Number(limit))
        .skip(Number(from))

    res.json({
        messages
    })
}

const messagesDelete = async (req, res = response) => {

    const { id } = req.query;
    console.log(id)
    try {
      const message = await Message.findByIdAndDelete(id);
  
      if (!message) {
        return res.status(404).json({
          msg: 'Mensaje no encontrado',
        });
      }
  
      res.json({
        msg: 'Mensaje eliminado',
        deletedMessage: message,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Error al eliminar el mensaje',
      });
    }
  };

module.exports ={
    messagesPost,
    messagesGet,
    messagesDelete,
}