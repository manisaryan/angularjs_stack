"use strict"

angular.module('admin')

.component('adminListProductComponent', {
  	templateUrl:'./../../../angularjs_stack/templates/admin.html',
  	bindings: { products: '<' },
  	controllerAs: "model",
  	controller: function($scope, Poroduct, $state) {
    	this.deleteProduct = function(product) {
        	Poroduct.delete({ id: product.id }, function(data) {
        		if(data[0].result === "success") {
        			$state.reload();        	
        		}
        	});
			}
		this.$onInit = function () { 
			// main();
			
			//
			// start here
			//
			// function main() {
			  const canvas = document.querySelector("#glCanvas");
			  // Initialize the GL context
			  const gl = canvas.getContext("webgl");
			
			  // Only continue if WebGL is available and working
			  if (!gl) {
				alert("Unable to initialize WebGL. Your browser or machine may not support it.");
				return;
			  }
			
			  // Set clear color to black, fully opaque
			  gl.clearColor(0.0, 0.0, 0.0, 1.0);
			  // Clear the color buffer with specified clear color
			  gl.clear(gl.COLOR_BUFFER_BIT);
			// }
		}	
    }
});
