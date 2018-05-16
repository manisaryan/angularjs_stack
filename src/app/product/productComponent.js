"use strict"

angular.module('product')

.component('productComponent', {
  templateUrl:'./../../../templates/products.html',
  bindings: { products: '<' }
});
