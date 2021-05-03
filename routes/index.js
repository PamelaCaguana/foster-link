const express = require('express')
const router = express.Router()

//@description  Login/Landing Page
//@route        GET /
//add middleware as a second argument
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

//@description  Login/Landing Page
//@route        GET /dashboard
//add middleware as a second argument
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router