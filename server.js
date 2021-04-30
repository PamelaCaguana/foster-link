const express = require('express')
const app = express()
const PORT = 8000;
const dotenv = require('dotenv')

//set up ejs for views
app.set("view engine", "ejs");

//static folder
app.use(express.static("public"))

//parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', require('./routes/index'))

//move to posts.js in routes folder
app.post('/posts', (req, res) => {
    console.log('Hellooooooooooooooooo!')
})

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
})