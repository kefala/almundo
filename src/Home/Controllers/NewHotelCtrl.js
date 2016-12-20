
function NewHotelCtrl(HotelesFactory, $state) {
	var vm = this;

    vm.hotel = {
        stars: 3,
        price: 5000
    };

    vm.goToHotelList = goToHotelList;
    vm.onSubmit = onSubmit;

    function goToHotelList() {
        $state.go("hoteles");
    }

    function onSubmit() {
        console.log(vm.hotel);
        HotelesFactory.save(vm.hotel).then(function done() {

            $state.go("hoteles");
        }, function err(data) {
            console.log(data);
        });
    }
    
}

angular
.module('almundo')
.controller('NewHotelCtrl', ['HotelesFactory', '$state', NewHotelCtrl]);