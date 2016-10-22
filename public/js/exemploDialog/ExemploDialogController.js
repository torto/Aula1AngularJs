(function(){
  'use strict';

  angular.module('app').controller('ExemploDialogController', function($scope, ngDialog, $rootScope, ExemploUmService){

    ExemploUmService.setTemp('Tortoooooo');

    $scope.message = 'Torto Lindo';


    $scope.openDialog = function(){
      ngDialog.open({
        template: 'js/exemploDialog/TemplateDialog.html',
         controller: function($scope, ExemploUmService){
           $scope.message = ExemploUmService.getTemp();
         }
      })
    }

  });

})()
