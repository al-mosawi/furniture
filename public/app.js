var app = angular.module("TodoApp", ["ngRoute", "TodoApp.Auth"]);

app.config(function ($routeProvider) {
    $routeProvider 
        .when("/", {
            templateUrl: "views/home.html"
        })
//        .when("/todos", {
//            templateUrl: "components/todos/todos.html",
//            controller: "TodoController"
//        })
     .when("/crud", {
            templateUrl: "views/crud.html",
            controller: "crudController"
        })
    .when("/home", {
            templateUrl: "views/home.html",
            controller: "homeController"
        })
    .when("/livingroom", {
            templateUrl: "views/livingroom.html",
            controller: "livingController"
        })
    .when("/diningroom", {
            templateUrl: "views/diningroom.html",
            controller: "diningController"
        })
    .when("/bedroom", {
            templateUrl: "views/bedroom.html",
            controller: "bedController"
        })
    .when("/information", {
            templateUrl: "views/information.html",
            controller: "informationCtrl"
        })
    .when("/", {
            templateUrl: "views/firstPage.html",
            controller: "firstPage"
        })
    
    
});
