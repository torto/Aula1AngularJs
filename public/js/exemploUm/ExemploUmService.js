angular.module('app').service('ExemploUmService', function($q){

  var temp = ''

  function getTemp(){
    return temp;
  }

  function setTemp(_temp){
    temp = _temp;
  }

  function soma(a, b) {
    return a + b;
  }

  function testPromiseSucess(text, isError){
    var deferred = $q.defer();

    if(!isError){
      setTimeout(function(){
        console.log(text);
        deferred.resolve(text + ' World');
      }, 10000);
    } else {
      setTimeout(function() {
          deferred.reject('Error MANOLO');
      }, 10000)

    }

    return deferred.promise;
  }

  return {
    ola: 'ola',
    somaDoisValores: soma,
    testPromiseSucess: testPromiseSucess,
    getTemp: getTemp,
    setTemp: setTemp
  }

});
