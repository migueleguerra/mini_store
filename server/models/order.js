var mongoose = require("mongoose");

var OrderSchema = new mongoose.Schema({
	name_customer: {type: String},
	name_product: {type: String},
	qty: {type: Number}
}, {timestamps: true });

mongoose.model("Order", OrderSchema);