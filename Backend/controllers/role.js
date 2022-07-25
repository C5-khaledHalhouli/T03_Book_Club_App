const roleModel = require("../model/roleSchema");

const createRole= (req, res) => {
  const { role, permission } = req.body;
  const newRole = new roleModel({
    role:role,
    permission:permission,
  });
  newRole.save().then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.status(404).json(err)
  })
};

module.exports = {createRole}