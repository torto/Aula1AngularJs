angular.module('app').directive('exemploUmDirective', function(){
  return {
    restrict: 'E',
    scope:{
      saudacaoAttr: '@info',
      execSoma: '&'
    },
    transclude: true,
    templateUrl: 'js/exemploUm/TemplateDirective.html',
    link: function(scope){
      // alert(scope.saudacaoAttr)
    }
  }
});
