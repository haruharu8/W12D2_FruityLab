const mongoose = require('mongoose');
// create schema (breakdown of what our data should look like)
const veggieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        color: String,
        age: Number,
        isHealthy: Boolean,
        readyToEat: Boolean
    },
    {
        timestamps: true
    }
    )
// create Model with that schema
// whatever we put as the collection name will be lowecased and pluralized +s
// Veggie > veggies
// User > users
const Veggie = mongoose.model("Veggie",         veggieSchema);
//                          1. ^ which collection   2. ^ the schema
module.exports = Veggie;