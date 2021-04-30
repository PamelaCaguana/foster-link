const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//@description  Login/Landing Page
//@route        GET /
//add middleware as a second argument
router.get('/', homeController.getIndex)

module.exports = router