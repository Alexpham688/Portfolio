var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl:"index.html"
  });
  .when("/interests",{
    templateUrl:"views/interests.html"
  });
  .when("/skills",{
    templateUrl:"view/interests.html"
  });
  .otherwise({
    redirectTo:"/index.html"
  });
});
