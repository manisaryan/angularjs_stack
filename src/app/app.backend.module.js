"use strict"
angular.module('backend', [])
.run(['$httpBackend', function($httpBackend) {
  var products = [
     { "id": 1, "name": "Laptop", "price": 6000, "quantity": 10, "description":"Electronics, laptop", "SKU": 1, "isDeleted": true },
     { "id": 2, "name": "Mobile", "price": 4000, "quantity": 2, "description":"This is mobile", "SKU": 2, "isDeleted": false },
     { "id": 3, "name": "Watch", "price": 3890, "quantity": 7, "description":"This is a watch", "SKU": 4, "isDeleted": false },
     { "id": 4, "name": "Pen", "price": 100, "quantity": 8, "description":"This is a pen", "SKU": 5, "isDeleted": false },
     { "id": 5, "name": "Book", "price": 200, "quantity": 2, "description":"This is a book", "SKU": 6, "isDeleted": false }
 ];

 	function findProductById(id) {
	  var productId = Number(id);
	  var matches = products.filter(function(product) {
	    return product.id === productId;
	  });
	  var item = matches.shift();
	  return item;
	}

 	$httpBackend.whenGET(/\.html$/).passThrough();

	$httpBackend.whenPOST('/products').respond(function(method, url, data) {
	  var newProduct = angular.fromJson(data);
	  newProduct.id = products.length + 1;
	  newProduct.isDeleted = false;
	  newProduct.SKU = Math.floor(Math.random(1, 99999) * 1000);
	  products.push(newProduct);

	  return [200, [newProduct], {}];
	});

	$httpBackend.whenPATCH('/products').respond(function(method, url, data) {
	  var newProduct = angular.fromJson(data);
	  products.forEach(function(item, index) {
	  	if(item.id === Number(newProduct.id)){
	  		products[index].name = newProduct.name;
	  		products[index].price = newProduct.price;
	  		products[index].description = newProduct.description;
	  	} 
	  });

	  return [200, [newProduct], {}];
	});

	$httpBackend.whenGET(/\/products\/(\d+)/, undefined, ['id']).respond(function(method, url, data, headers, params) {
	  var product = findProductById(params.id);
	  if (product == null) {
	    return [404, undefined, {}];
	  }
	  return [200, [product], {}];
	});

	$httpBackend.whenPUT(/\/products\/(\d+)/, undefined, undefined, ['id']).respond(function(method, url, data, headers, params) {
	  var product = findProductById(params.id),
	      parsedData = angular.fromJson(data);

	  if (product == null) {
	    return [404, undefined, {}];
	  }

	  angular.extend(product, parsedData);

	  return [200, product, {}];
	});

	$httpBackend.whenDELETE(/\/products\/(\d+)/, undefined, ['id']).respond(function(method, url, data, headers, params) {
		var product = findProductById(params.id);

		if (product == null) {
	    	return [404, undefined, {}];
	  	}

	  // Soft delete product.
	 	products.forEach(function(product, index) {
	  		if(product.id === Number(params.id)) {
	  			products[index].isDeleted = true;
	  		}
	  	});

	  return [200, [{result: "success"}], {}];
	});

	$httpBackend.whenGET('/products').respond(products);
}]);