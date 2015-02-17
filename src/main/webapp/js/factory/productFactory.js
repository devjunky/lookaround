/**
 * Created by hackintosh on 11/10/2014.
 */
app.factory('productFactory', ['$http', function($http) {

    var urlBase = '/lookAround/services/rest/products';
    var productFactory = {};

    productFactory.getAllProducts = function () {
        return $http.get(urlBase + '/all')
    };

    productFactory.getProduct = function (id) {
        return $http.get(urlBase + '/get/' + id)
    };

    productFactory.removeProduct = function (id) {
        return $http.get(urlBase + '/remove/' + id)
    };

    productFactory.addProduct = function (product) {
        return $http.post(urlBase + '/add', product);
    };

   /* questionFactory.updateCount = function (questionId, optionId) {
        return $http.get(urlBase + '/updateCount/' + questionId +'/'+ optionId);
    };*/


    return productFactory;

}]);