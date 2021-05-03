const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')

//Load config
dotenv.config({ path: './config/config.env' })

connectDB()

//set up ejs for views
app.set("view engine", "ejs")

//Routes
app.use('/', require('./routes/index'))

//static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
})