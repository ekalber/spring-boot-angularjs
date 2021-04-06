(function() {
    'use strict';
  
    angular
        .module('client')
        .service('DepartmentsService', DepartmentsService);
  
    /** @ngInject */
    function DepartmentsService($http, $log) {
      this.getAll = function() {
        return $http.get('http://localhost:9000/departments/all')
            .success(function(data) {
                return data;
            })
            .error(function(data) {
                return data;
            });
      }
    }
  })();
  