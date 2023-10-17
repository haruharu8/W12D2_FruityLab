// connect mongoose to db
// later when we use mongoose somewhere else, it will be connected

const mongoose = require('mongoose');

const password = process.env.MONGO_PASS; // required dotenv module

let connectionString = `mongodb+srv://cynthia:${process.env.MONGO_PASS}@freebieasure0.sfqxjtq.mongodb.net/Food?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
  });