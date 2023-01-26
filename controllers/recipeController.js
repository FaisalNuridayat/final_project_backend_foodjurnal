let bcrypt = require('bcrypt')
let Validator = require('validatorjs')
let models = require('../models/index')


async function getRecipe(req,res) {
    try {
        let result = await models.Recipe.findAll() // untuk menampilkan semua data  pakai findAll
        if(result.length < 1) {
            res.json({message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        
    }
}

async function getRecipeById(req,res) {
    try {
        let result = await models.Recipe.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createRecipe(req,res) {
    try {
        let createRecipe = await models.Recipe.create(req.body)
    res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function updateRecipe(req,res) {
    try {
        let result = await models.Recipe.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        let updateRecipe = await result.update(req.body)

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteRecipe(req,res) {
    try {
        let deleteRecipe = await models.Recipe.destroy({where: {id: req.params.id}})
        
    res.json({ message: "delete Recipe", id: req.params.id})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getRecipe, getRecipeById, createRecipe, updateRecipe, deleteRecipe
}