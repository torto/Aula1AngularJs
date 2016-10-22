angular.module('app').controller('ExemploUmController', function($scope, ExemploUmService, ExemploUmFactory, ExemploUmResources){
  $scope.saudacao = 'Olá Gente';

  $scope.list = ['ola', 'gente'];

  $scope.clickButton = function() {
    alert('oi');
  };

  // alert(ExemploUmService.ola);
  // alert(ExemploUmFactory.ola);

  $scope.executaService = function(){
    alert('asd');
    $scope. result = ExemploUmService.somaDoisValores($scope.valueA, $scope.valueA);
  }

  $scope.executaFactory = function(){
    $scope. result = ExemploUmFactory.soma($scope.valueA, $scope.valueA);
  }

  $scope.executaDirective = function(a, b) {
    $scope.result = (a+b)
  }

  console.log(ExemploUmResources.getAllPosts);

  ExemploUmResources.getPosts.query(function(resp, a){
    console.log(resp);
  }, function(err){
      console.log(err);
  });

  ExemploUmResources.getPosts.get({postId: 1}, function(resp){
    console.log(resp);
  }, function(err){

  });


  ExemploUmService.testPromiseSucess('Hello', true).then(function(success){
    alert('SUCCESS: ' + success);
  }, function(error) {
    alert('Error: ' + error);
  })


















});
