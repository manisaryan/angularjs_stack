"use strict"

angular.module('app')

  .config(function($stateProvider, $urlServiceProvider) {

     $urlServiceProvider.rules.otherwise({ state: 'admin' });

    $stateProvider
    .state('admin', {
      url: '/admin',
        component: 'adminListProductComponent',
        resolve: {
          products: function(Poroduct) {
            return Poroduct.query();
          }
        }
    })
    .state('add', {
      url: '/add',
      component: 'adminAddProductComponent' 
    })
    .state('edit', {
      url: '/edit/:id',
      resolve: {
        product: function(Poroduct, $transition$) {
          return Poroduct.get({id: $transition$.params().id});
          }
        },
      component: 'adminEditProductComponent'

    })
    .state('product', {
      url: '/product',
      component: 'productComponent',
      resolve: {
        products: function(Poroduct) {
          return Poroduct.query();
        }
      }
    })
    .state('about', {
      url: '/about',
      component: 'aboutComponent'
    })


});
