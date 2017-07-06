var app = angular.module("TodoApp", ["ngRoute", "TodoApp.Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html"
        })
        .when("/todos", {
            templateUrl: "components/todos/todos.html",
            controller: "TodoController"
        })
     .when("/crud", {
            templateUrl: "views/crud.html",
            controller: "crudController"
        })
    
});
