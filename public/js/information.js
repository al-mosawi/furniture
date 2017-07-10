angular.module("TodoApp").controller("informationCtrl", function($scope,$routeParams,svc){
    var id = $routeParams.id;
    console.log(id)
    svc.getById(id).then(function(response){
        $scope.information=response.data;

        console.log("information",$scope.information)
    })
})
