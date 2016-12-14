angular
    .module('almundo')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('hoteles', {
                url: "/",
                controller: 'HotelesMainCtrl as vm',
                templateUrl: '/components/view.main-hoteles.html'
            });
    }]);