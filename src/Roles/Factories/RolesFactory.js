function RolesFactory($http, $rootScope) {
    var factory = {
        getRoles: function () {
            return $http({
                withCredentials: true,
                cache: false,
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                url: $rootScope.apiHost + '/rrhh/loadInf',
                data: { token: "" } 
            });
        }
    };

    return factory;
}

angular
    .module('almundo')
    .factory('RolesFactory', ['$http', '$rootScope', RolesFactory]);