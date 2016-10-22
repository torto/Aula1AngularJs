angular.module('app').factory('ExemploUmFactory', function(){

  this.ola = 'Olá!';

  this.soma = function(a, b) {
    return a + b;
  }

  return this;

});
