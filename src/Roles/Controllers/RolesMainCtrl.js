function RolesMainCtrl(RolesFactory) {
    console.log("RolesMainCtrl");
    
    RolesFactory.getRoles().then(function done(data) {
        console.log(data);
    }, function err(data) {
        console.log(data);
    });
}

angular
    .module('almundo')
    .controller('RolesMainCtrl', ['RolesFactory', RolesMainCtrl]);