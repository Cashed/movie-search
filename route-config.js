(function() {
  'use strict';

  angular
    .module('MovieApp')
    .config(movieRouter);

  movieRouter.$inject = ['$routeProvider', '$locationProvider'];

  function movieRouter($routeProvider, $locationProvider) {
    $routeProvider
      .when('/movies/:search', {
        templateUrl: 'movies/movies.html',
        controller: 'Movies',
        controllerAs: 'movie',
        resolve: {
          movies: getMovieList
        }
      });
    $locationProvider.html5Mode(true);
  }

  function getMovieList(movieService, $route) {
    return movieService.getMovies($route.current.params.search).then(function(data) {
      return data;
    });
  }
})();
