(function() {
  'use strict';

  angular.module('MovieApp')
    .controller('MovieSearch', movieSearch);

  movieSearch.$inject = ['$scope'];

  function movieSearch($scope) {
    var vm = this;
  }
})();
