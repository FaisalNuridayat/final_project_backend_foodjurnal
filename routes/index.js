var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController')
let foodController = require('../controllers/foodController')
let recipeController = require('../controllers/recipeController')
let categoryController = require('../controllers/categoryController')
let nutrisiController = require('../controllers/nutrisiController')

let authController = require('../controllers/authController')
let authMiddleware = require('../middlewares/authMiddleware')

/* GET home page. */
router.get('/', (req,res) => {
  res.send('hello world')
});

router.post('/login', authController.login)




router.get('/user', authMiddleware.isAunthenticate, userController.getUser)
router.get('/user/:id', authMiddleware.isAunthenticate, userController.getUserById)
router.post('/user', authMiddleware.isAunthenticate, userController.createUser)
router.put('/user/:id', authMiddleware.isAunthenticate,userController.updateUser)
router.delete('/user/:id', authMiddleware.isAunthenticate, userController.deleteUser)

router.get('/food', authMiddleware.isAunthenticate, foodController.getFood)
router.get('/food/:id', authMiddleware.isAunthenticate, foodController.getFoodById)
router.post('/food', authMiddleware.isAunthenticate, foodController.createFood)
router.put('/food/:id', authMiddleware.isAunthenticate, foodController.updateFood)
router.delete('/food/:id', authMiddleware.isAunthenticate, foodController.deleteFood)



router.get('/category', authMiddleware.isAunthenticate, categoryController.getCategory)
router.get('/category/:id', authMiddleware.isAunthenticate, categoryController.getCategoryById)
router.post('/category', authMiddleware.isAunthenticate, categoryController.createCategory)
router.put('/category/:id', authMiddleware.isAunthenticate, categoryController.updateCategory)
router.delete('/category/:id', authMiddleware.isAunthenticate, categoryController.deleteCategory)


router.get('/recipe', authMiddleware.isAunthenticate, recipeController.getRecipe)
router.get('/recipe/:id', authMiddleware.isAunthenticate, recipeController.getRecipeById)
router.post('/recipe', authMiddleware.isAunthenticate, recipeController.createRecipe)
router.put('/recipe/:id', authMiddleware.isAunthenticate, recipeController.updateRecipe)
router.delete('/recipe/:id', authMiddleware.isAunthenticate, recipeController.deleteRecipe)

router.get('/nutrisi', authMiddleware.isAunthenticate, nutrisiController.getNutrisi)
router.get('/nutrisi/:id', authMiddleware.isAunthenticate, nutrisiController.getNutrisi)
router.post('/nutrisi', authMiddleware.isAunthenticate, nutrisiController.createNutrisi)
router.put('/nutrisi/:id', authMiddleware.isAunthenticate, nutrisiController.updateNutrisi)
router.delete('/nutrisi/:id', authMiddleware.isAunthenticate, nutrisiController.deleteNutrisi)


module.exports = router
