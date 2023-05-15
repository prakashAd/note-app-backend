//import express
const express =require ("express")

require('dotenv').config()
require('./database/connections')


// import middleware
const bodyParser = require('body-parser')

//routes
const noteRoute = require('./routes/noteRoute')

//creating express app
const app = express()
const port = process.env.PORT || 8000

//use middleware
app.use(bodyParser.json())
//use route
app.use('/api',noteRoute)

//to create server
app.listen(port,()=>{
    console.log(`Server Started Successfully at port ${port}`)
})