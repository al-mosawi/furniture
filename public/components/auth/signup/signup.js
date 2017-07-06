var app = angular.module("TodoApp.Auth");
app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope,$location, UserServer) {
$scope.passwordMessage = "";

 $scope.signup = function (user) {
    if (user.password !== $scope.passwordRepeat){
        $scope.passwordMessage = "Passwords do not match.";
    }else{
        UserServer.signup(user).then(function(response){
            $location.path("/login");
        }, function (response){
            alert("there was a problem:" + response.data)
        })
    }
}                                                                                   
}])