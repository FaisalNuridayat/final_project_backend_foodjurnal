let models = require('../models/index')
let jwt    = require('jsonwebtoken')
let bcrypt = require('bcrypt')



async function login(req,res) {
    try {
        let result = await models.User.findOne({where: {email: req.body.email}}) 
        if(result.length < 1) {
           return res.send("User not found")
        }

        let password = req.body.password
        let match = await bcrypt.compare(password, result.password)
        if(!match) {
            return res.send("Email or password wrong")
        } 

        let payload = {
            id : result.id,
            name: result.name,
            email: result.email,
        }
        let token = jwt.sign(payload, 'secret')

        return res.json({message: "login success", access_token: token})
    } catch (error) {
        return res.json(error)
    }
}

async function register(req, res) {
    try {
      const { name, email, password } = req.body;
  
      // Cek apakah email sudah digunakan
      let existingUser = await models.User.findOne({ where: { email } });
      if (existingUser) {
        return res.send({ message: 'Email already in use' });
      }
  
      // Hash password menggunakan bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Tambahkan pengguna baru ke database
      let result = await models.User.create({ name, email, password: hashedPassword });
  
      // Buat payload dan token JWT
      const payload = {
        id: result.id,
        name: result.name,
        email: result.email,
      };
      const token = jwt.sign(payload, 'secret');
  
      return res.json({ message: 'Registration success', access_token: token });
    } catch (error) {
      return res.json(error);
    }
  }

module.exports = {
    login, register
}