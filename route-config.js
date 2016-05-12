(function() {
  'use strict';

  angular
    .module('MovieApp')
    .config(movieRouter);

  movieRouter.$inject = ['$routeProvider', '$locationProvider'];

  function movieRouter($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'movie-search.html',
        controller: 'MovieSearch',
        controllerAs: 'query'
      });

    $locationProvider.html5Mode(true);
  }
})();
