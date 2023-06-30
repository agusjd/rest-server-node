const { response,request } = require("express");

const bcryptjs = require("bcryptjs");

const User = require("../models/user");

const userGet = async (req= request, res = response) => {

  const user = await User.find()


  res.json({
    user
  });
};

const userPost = async (req, res = response) => {
  const { userId, password } = req.body;
  const user = new User({ userId, password });

  // Encriptar contraseña
  const salt = bcryptjs.genSaltSync(10);
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();
  res.json({
    msg: "posttApi - controller",
    user,
  });
};

module.exports = {
  userGet,
  userPost,
};
