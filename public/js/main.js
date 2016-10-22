angular.module('app', ['ngRoute', 'ngResource', 'ngDialog']).config(function($routeProvider){

  $routeProvider.when('/',{
    templateUrl: 'js/exemploUm/ExemploUmView.html',
    controller: 'ExemploUmController'
  }).when('/dialog',{
    templateUrl: 'js/exemploDialog/ExemploDialogView.html',
    controller: 'ExemploDialogController'
  });

});
