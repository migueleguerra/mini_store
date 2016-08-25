var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");

module.exports = (function(){

	return{

		index: function(request, response){
			Customer.find({}, function(err, customers){
				if(err){
					console.log(err);
				}
				else
				{
					response.json(customers);
				}
			})
		},

		create: function(request, response){
			var customer = new Customer({
					name: request.body.name, 
				});

			customer.save(function(err){
				if(err)
				{
					console.log("something went wrong");
				}
				else
				{
					console.log("succesfully add " + request.body.name);
					response.redirect("/customers");
				}
			});
		},

		delete: function(request, response){
			Customer.remove({_id: request.body._id}, function(err){
				if(err)
				{
					console.log("something went wrong");
				}
				else
				{
					console.log("delete " + request.body.name);
					response.redirect("/customers");
				}
			});
		}
	}
})()