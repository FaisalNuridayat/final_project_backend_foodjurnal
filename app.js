let express = require('express')
let moment = require('moment')
let app = express()
let port = process.env.PORT || 3000
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let Validator = require('validatorjs')
let appRoute = require('./routes/index')
let bodyParser = require('body-parser');


let models = require('./models/index')

app.use(express.json())

app.use('/', appRoute)
 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
