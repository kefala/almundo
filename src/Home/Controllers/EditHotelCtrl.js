
function EditHotelCtrl(HotelesFactory, $state, $stateParams) {
	var vm = this;

    vm.hotel = {};

    HotelesFactory.getHotel($stateParams.hotelId).then(function done(data) {
        vm.hotel._id            = data.data._id;
        vm.hotel.name           = data.data.name;
        vm.hotel.description    = data.data.description;
        vm.hotel.price          = data.data.price;
        vm.hotel.stars          = data.data.stars;
        console.log(data);
    }, function err(data) {
        console.log(data);
    });

    vm.goToHotelList = goToHotelList;
    vm.onSubmit = onSubmit;

    function goToHotelList() {
        $state.go("hoteles");
    }

    function onSubmit() {
        console.log(vm.hotel);
        HotelesFactory.update(vm.hotel).then(function done() {
            $state.go("hoteles");
        }, function err(data) {
            console.log(data);
        });
    }
}

angular
.module('almundo')
.controller('EditHotelCtrl', ['HotelesFactory', '$state', '$stateParams',EditHotelCtrl]);