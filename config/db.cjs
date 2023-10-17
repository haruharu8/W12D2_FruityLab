// connect mongoose to db
// later when we use mongoose somewhere else, it will be connected

const mongoose = require('mongoose');

let connectionString = `mongodb+srv://cynthia:${process.env.MONGO_PASS}@freebieasure0.sfqxjtq.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect()