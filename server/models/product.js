var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
	name: {type: String},
	img: {type: String},
	des: {type: String},
	qty: {type: Number}
});

mongoose.model("Product", ProductSchema);