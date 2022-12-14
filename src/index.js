const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const starwarsRoute = require('./routes/starwars');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())
app.use('/starwars', starwarsRoute);


app.get('/', (req, res)=>{
    res.send("we are home")
})





//connect db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,}, ()=>{
    console.log("connected")
})





app.listen(3000);