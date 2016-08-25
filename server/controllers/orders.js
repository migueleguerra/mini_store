var mongoose = require("mongoose");
var Order = mongoose.model("Order");
var Product = mongoose.model("Product");

module.exports = (function(){

	return {

		index: function(request, response){
			Order.find({}, function(err, orders){
				if(err){
					console.log(err);
				}
				else
				{
					response.json(orders);
				}
			})
		},

		create: function(request, response){
			var order = new Order({
					name_customer: request.body.name_customer,
					name_product: request.body.name_product,
					qty: request.body.qty 
				});

			order.save(function(err){
				if(err)
				{
					console.log("something went wrong");
				}
				else
				{

					Product.findOne({name: request.body.name_product}, function(err, order){
						if(err){
							console.log(err);
						}
						else
						{
							Product.update({"name": order.name}, 
							{$set: {"qty": (order.qty - request.body.qty)}}, function(err){
								if(err){
									console.log(err);
								}
								else
								{
									console.log("succesfully add " + 
										order.name + " order.");
									console.log("succesfully update " + order.name + " quantity product." )
									response.redirect("/orders");
								}
							})
						}
					})
				}
			});
		},

		delete: function(request, response){
			Order.remove({_id: request.body._id}, function(err){
				if(err)
				{
					console.log("something went wrong");
				}
				else
				{
					console.log("delete order of " + request.body.name_customer);
					response.redirect("/orders");
				}
			});
		}
	}
})()