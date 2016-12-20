function HotelesFactory($http, $rootScope) {
    var factory = {
        getHoteles: function () {
            return $http({
                cache: false,
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET',
                url: $rootScope.apiHost + '/api//hotel' 
            });
        }
    };

    return factory;
}

angular
    .module('almundo')
    .factory('HotelesFactory', ['$http', '$rootScope', HotelesFactory]);