let bcrypt = require('bcrypt')
let Validator = require('validatorjs')
let models = require('../models/index')


async function getUser(req,res) {
    try {
        let result = await models.User.findAll({
            include: {
                association: 'recipe',
                attributes: ['id', 'recipe_name', 'ingredients' ]
            }
        }) // untuk menampilkan semua data  pakai findAll
        if(result.length < 1) {
            res.json({message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        
    }
}

async function getUserById(req,res) {
    try {
        let result = await models.User.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createUser(req,res) {
    try {
        let rules = { 
            name: 'required|min:3|max:50',
            email: 'required|email|min:3|max:50',
            password: 'required|min:6'
    
        }
        let validation = new Validator(req.body, rules)
        if(!validation.passes()) {
            res.json(validation.errors.all())
        }
    
    
        let salt = bcrypt.genSaltSync(10)
        let password = bcrypt.hashSync(req.body.password, salt)
        req.body.password =password
    
        let createUser = await models.User.create(req.body)
        
        res.json(req.body)
        } catch (error) {
            res.json(error)
        }
}

async function updateUser(req,res) {
    try {
        let result = await models.User.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        let updateUser = await result.update(req.body)

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteUser(req,res) {
    try {
        let deleteUser = await models.User.destroy({where: {id: req.params.id}})
        
    res.json({ message: "delete User", id: req.params.id})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getUser, getUserById, createUser, updateUser, deleteUser
}