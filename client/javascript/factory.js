myApp.factory("ProductsFactory", function($http){
	var products = [];
	var factory = {};

	factory.index = function(callback){
		$http.get("/products").success(function(output){
			products = output;
			callback(products);
		})
	}

	factory.create = function(info, callback){
		$http.post("/addProduct", info).success(function(output){
			products = output;
			callback(products);
		})
	}

	return factory;
});

myApp.factory("OrdersFactory", function($http){
	var orders = [];
	var factory = {};

	factory.index = function(callback){
		$http.get("/orders").success(function(output){
			orders = output;
			callback(orders);
		})
	}

	factory.create = function(info, callback){
		$http.post("/addOrder", info).success(function(output){
			orders = output;
			callback(orders);
		})
	}

	factory.delete = function(info, callback){
		$http.post("/removeOrder", info).success(function(output){
			orders = output;
			callback(orders);
		})
	}

	return factory;
});

myApp.factory("CustomersFactory", function($http){
	var customers = [];
	var factory = {};

	factory.index = function(callback){
		$http.get("/customers").success(function(output){
			customers = output;
			callback(customers);
		})
	}

	factory.create = function(info, callback){
		$http.post("/addCustomer", info).success(function(output){
			customers = output;
			callback(customers);
		})
	}

	factory.delete = function(info, callback){
		$http.post("/removeCustomer", info).success(function(output){
			customers = output;
			callback(customers);
		})
	}

	return factory;
});