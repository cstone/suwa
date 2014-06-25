/**
 * Created by Stone on 6/25/14.
 */

(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.product = gem;
    });

    var gem = {
        name: 'Test',
        price: 3.50,
        description: 'This is my description',
    }
})();