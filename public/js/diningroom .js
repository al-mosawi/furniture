angular.module('TodoApp').controller('diningController', function ($scope, mainSvc) {
    $scope.getData = function () {
        mainSvc.getReq().then(function (response) {

            $scope.collection = response.data.filter(function (item) {
                return item.collectionType === "diningroom"
            })
        })
    }
    $scope.pay = function() {
        console.log("pay")
        $("#myModal").modal("hide");
    }
})