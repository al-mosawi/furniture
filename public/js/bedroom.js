angular.module('TodoApp').controller('bedController', function ($scope, mainSvc) {
    $scope.getData = function () {
        mainSvc.getReq().then(function (response) {

            $scope.collection = response.data.filter(function (item) {
                return item.collectionType === "bedroom"
            })
        })
    }
    $scope.pay = function() {
        console.log("pay")
        $("#myModal").modal("hide");
    }
})