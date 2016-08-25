var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = (function(){

	return {

		index: function(request, response){
			Product.find({}, function(err, products){
				if(err){
					console.log(err);
				}
				else
				{
					response.json(products);
				}
			})
		},

		create: function(request, response){
			var product = new Product({
					name: request.body.name, 
					img: request.body.img, 
					des: request.body.des,
					qty: request.body.qty
				});

			product.save(function(err){
				if(err)
				{
					console.log("something went wrong");
				}
				else
				{
					console.log("succesfully add " + request.body.name);
					response.redirect("/products");
				}
			});
		}
	}
})()