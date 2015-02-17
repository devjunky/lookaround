/**
 * Created by hackintosh on 11/10/2014.
 */
app.controller("productController", function ($scope, $location, productFactory) {
    $scope.products;
    $scope.retrievedProduct = {};
    $scope.newProduct = {};
    $scope.status;

    getProducts();

    $scope.searchProduct = function () {
        getProduct();
        $scope.products.push($scope.retrievedProduct);
    }


    function getProducts() {
        productFactory.getAllProducts()
            .success(function (data) {
                $scope.products = data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    function getProduct() {
        productFactory.getProduct($scope.id)
            .success(function (data) {
                $scope.retrievedProduct = data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    $scope.deleteProduct = function () {
        var id = $scope.product.id;
        productFactory.removeProduct(id)
            .success(function () {
                $scope.status = 'Item has been successfully removed..';
                $scope.newProduct = "";
                $location.path('home');
            }).
            error(function (error) {
                $scope.status = 'Unable to remove the entry: ' + error.message;
            });

    }

    $scope.addProduct = function () {
        var productToSave = $scope.newProduct;

        if (productToSave.productName.length > 0) {
            productFactory.addProduct(productToSave)
                .success(function () {
                    $scope.status = 'Successfully listed item! Refreshing question list.';
                    $scope.newProduct = "";
                    $location.path('home');
                }).
                error(function (error) {
                    $scope.status = 'Unable to list the item: ' + error.message;
                });
        } else {
            alert("You must enter a question.. :-)")
        }
    }




});

