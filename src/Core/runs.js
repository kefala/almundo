angular
    .module('almundo')
    .run(['$rootScope', function ($rootScope) {
        if (location.host.indexOf("jabamastudio.com") != -1) {
            $rootScope.apiHost = "//api-resto.jabamastudio.com";
        }
        else  {
            $rootScope.apiHost = "//localhost:3000";
        }
    }]);