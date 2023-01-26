let bcrypt = require('bcrypt')
let Validator = require('validatorjs')
let models = require('../models/index')


async function getCategory(req,res) {
    try {
        let result = await models.Category.findAll({
            include: [{
                association: 'recipe',
                attributes: ['id', 'recipe_name', 'ingredients' ]
            },
            {
                association: 'food',
                attributes: ['id', 'name', 'ingredients', 'price']
            }]
            
        }) // untuk menampilkan semua data  pakai findAll
        if(result.length < 1) {
            res.json({message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        
    }
}

async function getCategoryById(req,res) {
    try {
        let result = await models.Category.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createCategory(req,res) {
    try {
        let createCategory = await models.Category.create(req.body)
    res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function updateCategory(req,res) {
    try {
        let result = await models.Category.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        let updateCategory = await result.update(req.body)

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteCategory(req,res) {
    try {
        let deleteFood = await models.Category.destroy({where: {id: req.params.id}})
        
    res.json({ message: "delete Category", id: req.params.id})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getCategory, getCategoryById, createCategory, updateCategory, deleteCategory
}