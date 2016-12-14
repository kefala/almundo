angular
    .module('almundo')
    .config(['$stateProvider', function ($stateProvider) {
        console.log("routes");
        
        $stateProvider
            .state('puestosHome', {
                url: "/puestos",
                controller: 'RolesMainCtrl as vm',
                templateUrl: '/components/view.main-roles.html'
            });
    }]);