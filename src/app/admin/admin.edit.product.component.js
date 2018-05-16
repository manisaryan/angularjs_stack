"use strict"

angular.module('admin')

.component('adminEditProductComponent', {
  	templateUrl:'./../../../templates/admin-edit-product.html',
    bindings: { product: '<' },
  	controller: function($scope, Poroduct, $state) {
    	this.editProduct = function() {
    		Poroduct.update($scope.$ctrl.product[0], function(data) {
    			if(data) {
    				// @TODO: Remove alert and any logger service.
    				alert("Product updated successfully!!");
    				$state.go('admin', {reload: true});
    			}
    		})
    	}
  	}
});