const { response } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/user");

const login = async (req, res = response) => {
  const { userId, password } = req.body;

  try {
    //Verifica si usuario existe
    const user = await User.findOne({ userId });

    console.log(user)
    if (!user) {
      return res.status(400).json({
        msg: "User not found",
      });
    }

    //Verifica password

    const validPassword = bcryptjs.compareSync(password, user.password);
    console.log(validPassword);
    if(!validPassword) {
        return res.status(400).json({
            msg: "password is incorrect",
          });
    }

    res.json({
      msg: "login ok",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error",
    });
  }
};

module.exports = {
  login,
};
