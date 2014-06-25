/**
 * Created by Stone on 6/25/14.
 */

(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
    {
        name: 'Test',
        price: 3.50,
        description: 'This is my description',
        canPurchase: false,
        soldOut: true
    },

    {
        name: 'Test2',
        price: 3.50,
        description: 'This is my description again',
        canPurchase: true,
        soldOut: false
    }

    ];
})();