/**
 * Created by jumange on 11/15/14.
 */
app.controller("detailController", function ($scope, $routeParams, $location, productFactory) {
    $scope.product = {};
    $scope.retrievedProduct = {};
    init();

    function init() {
        productFactory.getProduct($routeParams.id)
            .success(function (data) {
                $scope.product = data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

});


