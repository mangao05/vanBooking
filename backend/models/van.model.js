const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vanSchema = new Schema({
	name: String,
    year: Number,
    assetBody: String,
    transmission: String,
    seats: Number,
    category: String,
    stock: Number
});

const Van = mongoose.model('Van', vanSchema);

module.exports = Van;

