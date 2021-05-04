const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')//(session)
const flash = require('express-flash')
const logger = require('morgan')
const PORT = process.env.PORT || 8000
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//Load config
dotenv.config({ path: './config/config.env' })

//Passport Config
require('./config/passport')(passport)

connectDB()

//set up ejs for views
app.set("view engine", "ejs")

// Sessions
// Setup Sessions - stored in MongoDB
// always place above passport middleware
app.use(
    session({
      secret: 'keyboard cat',
      resave: false, //dont save a session if nothing is modified
      saveUninitialized: false, //dont create a session until something is stored
      //store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

  // Passport middleware
  app.use(passport.initialize())
  app.use(passport.session())
  

//Routes
app.use('/', require('./routes/index'))

//static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
})