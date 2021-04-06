(function() {
    'use strict';
  
    angular
        .module('client')
        .service('EmployeesService', EmployeesService);
  
    /** @ngInject */
    function EmployeesService($http, $log) {
      
      this.getAll = function() {
        return $http.get('http://localhost:9000/employees/all')
            .success(function(data) {
                return data;
            })
            .error(function(data) {
                return data;
            });
      }

      this.create = function(user) {
        return $http.post('http://localhost:9000/employees/add', user)
            .success(function(data) {
              //$log.info("+++");
              return data;
            })
            .error(function(data) {
                return data;
            });
      }
    }
  })();
  