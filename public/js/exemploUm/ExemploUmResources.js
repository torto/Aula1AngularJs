angular.module('app').service('ExemploUmResources', function($resource) {
  var urlDefault = 'https://jsonplaceholder.typicode.com';
  return {
    'getPosts': $resource(urlDefault+'/posts/:postId', {postId: '@id'})
  };
});
