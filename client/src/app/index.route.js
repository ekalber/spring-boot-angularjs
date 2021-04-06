(function() {
  'use strict';

  angular
    .module('client')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      /*.when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })*/
      // Employee list
      .when('/', {
        templateUrl: 'app/components/employees/list.html',
        controller: 'EmployeesController',
        controllerAs: 'employees'
      })
      // Add a new employee
      .when('/employees/new', {
        templateUrl: 'app/components/employees/new.html',
        controller: 'EmployeesController',
        controllerAs: 'employees'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
