const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    coffeeName: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Coffee = mongoose.model('Coffee', coffeeSchema);
module.exports = Coffee;