let bcrypt = require('bcrypt')
let Validator = require('validatorjs')
let models = require('../models/index')


async function getFood(req,res) {
    try {
        let result = await models.Food.findAll() // untuk menampilkan semua data  pakai findAll
        if(result.length < 1) {
            res.json({message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        
    }
}

async function getFoodById(req,res) {
    try {
        let result = await models.Food.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createFood(req,res) {
    try {
        let createFood = await models.Food.create(req.body)
    res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function updateFood(req,res) {
    try {
        let result = await models.Food.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        let updateFood = await result.update(req.body)

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteFood(req,res) {
    try {
        let deleteFood = await models.Food.destroy({where: {id: req.params.id}})
        
    res.json({ message: "delete User", id: req.params.id})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getFood, getFoodById, createFood, updateFood, deleteFood
}