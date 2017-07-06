angular.module('TodoApp').controller('crudController', function($scope, mainSvc){
    $scope.edit = true ;
    $scope.getData = function(){
        mainSvc.getReq().then(function(response){
            $scope.collection = response.data
        })
    }
    $scope.btn = function(){
        var data = {
            img: $scope.img,
            name: $scope.name,
            price: $scope.price,
            description: $scope.description,
            collectionType: $scope.collectionType
        }
        console.log(data)
        mainSvc.postReq(data).then(function(response){
            $scope.getData()
        })
    }
    $scope.remove = function(id){
        mainSvc.deleteReq(id).then(function(response){
            $scope.getData()
        })
    }
})