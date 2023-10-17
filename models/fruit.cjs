// create schema (breakdown of what our data should look like)
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema(
{
    name: String,
    color: String,
    readyToEat: Boolean
},
{
    timestamps: true,

}
);

// create Model w/ schema
// whatever we put as the collection name will be lowercased and plurlized +s
// Fruit > fruits
// User > users
const Fruit = mongoose.model('Fruit',            fruitSchema)

//                          1.   ^ which collection 2. ^ the schema

module.exports = Fruit;