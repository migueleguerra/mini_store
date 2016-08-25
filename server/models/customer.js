var mongoose = require("mongoose");

var CustomerSchema = new mongoose.Schema({
	name: {type: String}
}, {timestamps: true });

mongoose.model("Customer", CustomerSchema);