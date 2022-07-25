const userModel = require("../model/userSchema");

const createNeWUser = (req, res) => {
  const { email, userName, password, role } = req.body;
console.log(password);
  const newUser = new userModel({
    email,
    userName,
    password,
    role,
  });
  newUser.save().then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.status(404).json({err})
  })
};

module.exports = {createNeWUser}
