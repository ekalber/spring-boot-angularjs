(function() {
    'use strict';
  
    angular
      .module('client')
      .controller('EmployeesController', EmployeesController);
  
    /** @ngInject */
    function EmployeesController($location, $route, $filter, $log, EmployeesService, DepartmentsService) {
      var vm = this;
      vm.employee = [];
      vm.employeeList = [];
      vm.departmentList = [];
        
      vm.getData = function() {
        $log.info('GET DATA');
        if(vm.employeeList.length === 0) {
          EmployeesService.getAll().success(function(data) {
            vm.employeeList = data;
          });
          DepartmentsService.getAll().success(function(data){
            vm.departmentList = data;
          })
        }
      }

      /**
      * Create a employees
      */
      vm.create = function(employee){
        vm.employeeList = EmployeesService.create(employee).success(function(data) {
          vm.employeeList.push(data);
        });
      };

      /**
      * Insert/update abstraction
      * @param  {Object} item Contact informations
      */
      vm.save = function(item){
        //console.log('hola, llego a crear');
        if(typeof item.id !== 'undefined'){
          vm.update(item);
        } else {
          vm.create(item);
        }
        vm.reset();
        $location.path('/employees');
      };
 
      /**
        * Reinitialize form values
      */
      vm.reset = function() {
        vm.employee = [
          {
            name: '',
            salary: '',
            department: 
            {
                id: 0,
                name: ''
            }
          }
        ];
      };
      
      vm.init = function(){
        vm.getData();
        vm.reset();
        //  Calling routeParam method
        if ($route.current.method !== undefined) {
          vm[$route.current.method]();
        }
      };

      vm.init();
    }
  })();
  

