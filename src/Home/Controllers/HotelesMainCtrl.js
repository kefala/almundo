function HotelesMainCtrl(HotelesFactory) {
	var vm = this;
	console.log("HotelesMainCtrl");
    /*
    HotelesFactory.getHoteles().then(function done(data) {
        console.log(data);
    }, function err(data) {
        console.log(data);
    });
    */

    var imagePath = 'img/list/60.jpeg';

    vm.todos = [];
    
    for (var i = 0; i < 15; i++) {
    	vm.todos.push({
    		face: imagePath,
    		what: "Hotelsiño del placer",
    		who: "Viva un fin de semandiño increible",
    		notes: "Aceptamos tarjetiña de creditiño"
    	});
    }
}

angular
.module('almundo')
.controller('HotelesMainCtrl', ['HotelesFactory', HotelesMainCtrl]);