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

module.exports = {
    login
}