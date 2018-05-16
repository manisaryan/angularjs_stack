"use strict"

angular.module('admin')
.component('adminAddProductComponent', {
  	templateUrl:'./../../../templates/admin-add-product.html',
  	controller: function($scope, Poroduct, $state) {
  		this.product = {};
    	this.addProduct = function() {
    		Poroduct.post(this.product, function(data) {
    			if(data) {
    				// @TODO: Remove alert and any logger service.
    				alert("Product added successfully!!");
    				$state.go('admin', {reload: true});
    			}
    		})
    	}
  	}
});