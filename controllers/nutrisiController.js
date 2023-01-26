let bcrypt = require('bcrypt')
let Validator = require('validatorjs')
let models = require('../models/index')


async function getNutrisi(req,res) {
    try {
        let result = await models.Nutrisi.findAll() // untuk menampilkan semua data  pakai findAll
        if(result.length < 1) {
            res.json({message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        
    }
}

async function getNutrisiById(req,res) {
    try {
        let result = await models.Nutrisi.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createNutrisi(req,res) {
    try {
        let createNutrisi = await models.Nutrisi.create(req.body)
    res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function updateNutrisi(req,res) {
    try {
        let result = await models.Nutrisi.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            res.json({ message: "Data not available"})
        }
        let updateNutrisi = await result.update(req.body)

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteNutrisi(req,res) {
    try {
        let deleteNutrisi = await models.Nutrisi.destroy({where: {id: req.params.id}})
        
    res.json({ message: "delete User", id: req.params.id})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getNutrisi, getNutrisiById, createNutrisi, updateNutrisi, deleteNutrisi
}