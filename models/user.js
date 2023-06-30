const {Schema, model} = require('mongoose');

const userSchema = Schema({
    userId:{
        type:String,
        require:[true, 'El nombre es obligatorio']
    },
    password:{
        type:String,
        require:[true, 'El password es obligatorio'],
    },

})

userSchema.methods.toJSON = function(){
    const {__v,password, ...user} = this.toObject()
    return user
}

module.exports = model('user',userSchema)