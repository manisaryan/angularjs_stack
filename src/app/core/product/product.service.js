'use strict';

angular. module('product.service')

.factory('Poroduct', function($resource){
    var url = '/products/:id'
    return $resource(url, {}, {
        query: {
            method: "GET",
            params: {},
            isArray: true,
            cache: false,
        },
        get: {
            method: "GET",
            params: {"id": '@id'},
            isArray: true,
            cache: false,
        },
        delete: {
            method: "DELETE",
            params: {"id": '@id'},
            isArray: true,
            cache: false,
        },
        post: {
            method: "POST",
            params: {},
            isArray: true,
            cache: false,
        },
        update: {
            method: "PATCH",
            params: {},
            isArray: true,
            cache: false,
        }
    })
});