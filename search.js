(function() {
  'use strict';

  angular
    .module('MovieApp')
    .controller('Search', search);

  search.$inject = ['$scope'];

  function search($scope) {
    var vm = this;
  }
})();
