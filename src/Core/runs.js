angular
    .module('almundo')
    .run(['$rootScope', function ($rootScope) {
        if (location.host.indexOf("almundo.herokuapp") != -1) {
            $rootScope.apiHost = "//almundo.herokuapp.com";
        }
        else  {
            $rootScope.apiHost = "//localhost:3000";
        }
    }]);