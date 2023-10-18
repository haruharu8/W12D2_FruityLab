/* eslint-disable no-undef */
const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();

const Veggie = require('./models/Veggie.cjs')
const Fruit = require('./models/fruit.cjs')


// allows us to use process.env (get variables from .env file)
require('dotenv').config();


require('./config/db.cjs');


app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))






app.use(express.json()); // adds .body to the request




app.get("/fruits", async (req, res) => {
    let fruitsFromDB = await Fruit.find();
    res.send(fruitsFromDB);
})


app.get("/", (req, res) => {
    res.send("here is your valuable data")
})

app.post("/fruits", async (req,res) => {
    console.log(req.body);
    let fruit = req.body;
    let responseFromDB = await Fruit.create(fruit);
    console.log(responseFromDB);
    res.send("Route is good")
})

app.get('/veggies', async (req, res) => {
    let veggiesFromDB = await Veggie.find()
    res.send(veggiesFromDB)
})

app.post("/veggies", async (req, res) => {
    // make veggie model
    let dbResponse = await Veggie.create(req.body)
    res.status(201).send(dbResponse)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});