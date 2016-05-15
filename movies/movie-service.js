(function() {
  'use strict';

  angular
    .module('MovieApp')
    .factory('movieService', movieService);

    movieService.$inject = ['$http'];

    function movieService($http) {
      var getMovies =  function(title) {
        return $http.get(`http://www.omdbapi.com/?s=${title}`)
          .then(function(movies) {
            return movies.data.Search;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      return {
        getMovies: getMovies
      }
    }
})();
