angular
    .module('almundo')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('hoteles', {
                url: "/",
                controller: 'HotelesMainCtrl as vm',
                templateUrl: '/components/view.main-hoteles.html'
            })
            .state('editHotel', {
                url: "/edit/:hotelId",
                controller: 'EditHotelCtrl as vm',
                templateUrl: '/components/view.hotel.html'
            })
            .state('newHotel', {
                url: "/add",
                controller: 'NewHotelCtrl as vm',
                templateUrl: '/components/view.hotel.html'
            });
    }]);