myApp.controller("productsController", function($scope, ProductsFactory){
	var products = [];

	ProductsFactory.index(function(data){
		$scope.products = data;
	})

	$scope.addProduct = function(){
		ProductsFactory.create($scope.new_product, function(data){
		 	$scope.products = data;
			$scope.new_product = {};
		})
	}
});

myApp.controller("customerController", function($scope, CustomersFactory){
	var customers = [];

	$scope.min_length = 4;

	CustomersFactory.index(function(data){
		$scope.customers = data;
		customers = data;
	})

	$scope.addCustomer = function(){
		var flag = true;
		
		if($scope.new_customer)
		{
			for(var i = 0; i < customers.length; i++){
				if(customers[i].name == $scope.new_customer.name)
				{
					flag = false;
				}
			}

			if(flag){
				CustomersFactory.create($scope.new_customer, function(data){
					$scope.customers = data;
					$scope.new_customer = {};
				})
			}
			else
			{
				alert("The customer name you try to add, already exist!");
			}
		}
	}

	$scope.removeCustomer = function(customer){
		CustomersFactory.delete(customer, function(data){
			$scope.customers = data;
			customers = data;
		})
	}
})

myApp.controller("ordersController", function($scope, ProductsFactory, CustomersFactory, OrdersFactory){
	var customer = [];
	var products = [];
	var orders = [];

	var NumItem = [0];
	var cont = 0;

	ProductsFactory.index(function(data){
		$scope.products = data;
		products = data;
	})

	CustomersFactory.index(function(data){
		$scope.customers = data;
	})

	OrdersFactory.index(function(data){
		$scope.orders = data;
	})

	$scope.item = function(data){
		var Num = [];
		NumItem = [0];

		for(var i = 0; i < products.length; i++)
		{
			if(products[i].name == data)
			{
				cont = products[i].qty;
			}
		}

		for(var i = 1; i <= cont; i++)
		{
			Num.push(i);
		}

		if(Num.length != 0)
		{
			$scope.NumItem = Num;
		}
	}

	$scope.addOrder = function(){
		OrdersFactory.create($scope.new_order, function(data){
			$scope.orders = data;
			$scope.new_order = {};
		})
	}

	$scope.removeOrder = function(order){
		OrdersFactory.delete(order, function(data){
			$scope.orders = data;
		})
	}

})

myApp.controller("homeController", function($scope, OrdersFactory, ProductsFactory, CustomersFactory){
	var customer = [];
	var products = [];
	var orders = [];


	ProductsFactory.index(function(data){
		$scope.products = data;
		products = data;
	})

	CustomersFactory.index(function(data){
		$scope.customers = data;
	})

	OrdersFactory.index(function(data){
		$scope.orders = data;
	})
})