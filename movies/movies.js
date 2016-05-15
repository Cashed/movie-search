(function() {
  'use strict';

  angular
    .module('MovieApp')
    .controller('Movies', Movies);

  Movies.$inject = ['$scope', 'movies'];

  function Movies($scope, movies) {
    var vm = this;
    vm.movieList = movies;
  }
})();
