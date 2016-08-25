var products = require("./../controllers/products.js");
var customers = require("./../controllers/customers.js");
var orders = require("./../controllers/orders.js");

module.exports = function(app){

	app.get("/products", function(request, response){
		products.index(request, response);
	})

	app.post("/addProduct", function(request, response){
		products.create(request, response);
	})

	app.get("/customers", function(request, response){
		customers.index(request, response);
	})

	app.post("/addCustomer", function(request, response){
		customers.create(request, response);
	})

	app.post("/removeCustomer", function(request, response){
		customers.delete(request, response);
	})

	app.get("/orders", function(request, response){
		orders.index(request, response);
	})

	app.post("/addOrder", function(request, response){
		orders.create(request, response);
	})

	app.post("/removeOrder", function(request, response){
		orders.delete(request, response);
	})
}