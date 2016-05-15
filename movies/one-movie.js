(function() {
  'use strict';

  angular
    .module('MovieApp')
    .controller('Movie', Movie);

  Movie.$inject = ['$scope', 'oneMovie'];

  function Movie($scope, oneMovie) {
    var vm = this;
    vm.movieInfo = oneMovie;
  }
})();
