//por una cuestion de performance prefiero hacer siempre filtros con vanilla
function filter(hotels, price, stars) {
    var hotelsFiltered = [];
    for (var i = hotels.length - 1; i >= 0; i--) {
        if (hotels[i].price <= price && hotels[i].stars <= stars) {
            hotelsFiltered.push(hotels[i]);
        }
    }
    return hotelsFiltered;
}


function HotelesMainCtrl(HotelesFactory, $state) {
	var vm = this;
    vm.hotels = [];
    hotels = [];

    vm.isNevahToShow = false;
    vm.onPriceFilterChange = onPriceFilterChange;
    vm.onStarsFilterChange = onStarsFilterChange;
    vm.goToAddHotel = goToAddHotel;
    vm.deleteHotel = deleteHotel;

    function goToAddHotel() {
        $state.go("newHotel");
    }

    function deleteHotel(hotel) {

        HotelesFactory.delete(hotel).then(function done() {
            console.log("Borro");
            if (hotels.indexOf(hotel) !== -1) {
                hotels.splice(hotels.indexOf(hotel), 1);
            }
            if (vm.hotels.indexOf(hotel) !== -1) {
                vm.hotels.splice(vm.hotels.indexOf(hotel), 1);
            }
        }, function err(data) {
            console.log(data);
        });
    }

    function onPriceFilterChange() {
        vm.hotels = filter(hotels, vm.filters.price, vm.filters.stars);
        verifyIfHaveToShow();
    }

    function onStarsFilterChange() {
        vm.hotels = filter(hotels, vm.filters.price, vm.filters.stars);
        verifyIfHaveToShow();
    }

    function verifyIfHaveToShow () {
        vm.isNevahToShow = (vm.hotels.length || vm.hotels.length < 0) ? false : true;
    }

    vm.filters = {
        price: 10000,
        stars: 5
    };
    
    HotelesFactory.getHoteles().then(function done(data) {
        vm.hotels = data.data;
        hotels = data.data;
        verifyIfHaveToShow();
    }, function err(data) {
        console.log(data);
    });
}

angular
.module('almundo')
.controller('HotelesMainCtrl', ['HotelesFactory', '$state',HotelesMainCtrl]);