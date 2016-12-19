var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotelSchema = new Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true},
	stars: { type: Number, required: true, min: 0, max: 5},
	price: { type: Number, required: true, min: 0},
	created_at: { type: Date, required: true }
});

var Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;