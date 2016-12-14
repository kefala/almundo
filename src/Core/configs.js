angular
    .module('almundo')
    .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', 
    	function ($httpProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider) {
        $urlRouterProvider.otherwise('/');

        $mdThemingProvider.theme('default')
		    .primaryPalette('orange')
		    .accentPalette('blue');
    }]);