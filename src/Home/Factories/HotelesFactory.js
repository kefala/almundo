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
                url: $rootScope.apiHost + '/api/hotel' 
            });
        },
        getHotel: function (id) {
            return $http({
                cache: false,
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET',
                url: $rootScope.apiHost + '/api/hotel/' + id
            });
        },
        delete: function (data) {
            console.log(data._id);
            return $http({
                cache: false,
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE',
                url: $rootScope.apiHost + '/api/hotel/' + data._id
            });
        },
        update: function (data) {
            console.log(data);
            return $http({
                cache: false,
                responseType: 'json',
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                url: $rootScope.apiHost + '/api/hotel/' + data._id
            });
        },
        save: function (data) {
            console.log(data);
            return $http({
                cache: false,
                responseType: 'json',
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                url: $rootScope.apiHost + '/api/hotel' 
            });
        }
    };

    return factory;
}

angular
.module('almundo')
.factory('HotelesFactory', ['$http', '$rootScope', HotelesFactory]);