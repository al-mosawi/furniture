angular.module('TodoApp').service('mainSvc', function($http){
    var url = 'http://localhost:1116/furniture/'
    this.getReq = function(){
        return $http.get(url)
    }
     this.postReq = function(collcetion){
        return $http.post(url, collcetion)
    }
      this.deleteReq = function(id){
        return $http.delete(url + id)
    }
       this.getById = function (id){
        return $http.get(url +id)
    }
})