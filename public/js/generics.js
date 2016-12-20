function MenuDirectiveCtrl(e){function t(){this.sideBar&&e("menu").toggle()}var o=this;o.toogle=t}function MenuDir(){var e={templateUrl:"/components/directive.menu.html",restrict:"EA",scope:{sideBar:"=sideBar"},controller:["$mdSidenav",MenuDirectiveCtrl],replace:"true",controllerAs:"vm",bindToController:!0};return e}function HotelesFactory(e,t){var o={getHoteles:function(){return e({cache:!1,responseType:"json",headers:{"Content-Type":"application/json"},method:"GET",url:t.apiHost+"/api/hotel"})},getHotel:function(o){return e({cache:!1,responseType:"json",headers:{"Content-Type":"application/json"},method:"GET",url:t.apiHost+"/api/hotel/"+o})},delete:function(o){return e({cache:!1,responseType:"json",headers:{"Content-Type":"application/json"},method:"DELETE",url:t.apiHost+"/api/hotel/"+o._id})},update:function(o){return e({cache:!1,responseType:"json",data:o,headers:{"Content-Type":"application/json"},method:"PUT",url:t.apiHost+"/api/hotel/"+o._id})},save:function(o){return e({cache:!1,responseType:"json",data:o,headers:{"Content-Type":"application/json"},method:"POST",url:t.apiHost+"/api/hotel"})}};return o}function EditHotelCtrl(e,t,o){function n(){t.go("hoteles")}function l(){e.update(r.hotel).then(function(){t.go("hoteles")},function(e){console.log(e)})}var r=this;r.hotel={},e.getHotel(o.hotelId).then(function(e){r.hotel._id=e.data._id,r.hotel.name=e.data.name,r.hotel.description=e.data.description,r.hotel.price=e.data.price,r.hotel.stars=e.data.stars},function(e){console.log(e)}),r.goToHotelList=n,r.onSubmit=l}function filter(e,t,o){for(var n=[],l=e.length-1;l>=0;l--)e[l].price<=t&&e[l].stars<=o&&n.push(e[l]);return n}function HotelesMainCtrl(e,t){function o(){t.go("newHotel")}function n(e){t.go("editHotel",{hotelId:e._id})}function l(t){e.delete(t).then(function(){hotels.indexOf(t)!==-1&&hotels.splice(hotels.indexOf(t),1),s.hotels.indexOf(t)!==-1&&s.hotels.splice(s.hotels.indexOf(t),1),i()},function(e){console.log(e)})}function r(){s.hotels=filter(hotels,s.filters.price,s.filters.stars),i()}function a(){s.hotels=filter(hotels,s.filters.price,s.filters.stars),i()}function i(){s.isNevahToShow=!(s.hotels.length||s.hotels.length<0)}var s=this;s.hotels=[],hotels=[],s.isNevahToShow=!1,s.onPriceFilterChange=r,s.onStarsFilterChange=a,s.goToAddHotel=o,s.deleteHotel=l,s.goToEditHotel=n,s.filters={price:1e4,stars:5},e.getHoteles().then(function(e){s.hotels=e.data,hotels=e.data,i()},function(e){console.log(e)})}function NewHotelCtrl(e,t){function o(){t.go("hoteles")}function n(){e.save(l.hotel).then(function(){t.go("hoteles")},function(e){console.log(e)})}var l=this;l.hotel={stars:3,price:5e3},l.goToHotelList=o,l.onSubmit=n}angular.module("almundo",["ngMaterial","ngRoute","ui.router"]),angular.element(document).ready(function(){angular.bootstrap(document,["almundo"])}),angular.module("almundo").run(["$rootScope",function(e){location.host.indexOf("almundo.herokuapp")!=-1?e.apiHost="//almundo.herokuapp.com":e.apiHost="//localhost:3000"}]),angular.module("almundo").config(["$httpProvider","$stateProvider","$urlRouterProvider","$mdThemingProvider",function(e,t,o,n){o.otherwise("/"),n.theme("default").primaryPalette("orange").accentPalette("blue")}]),angular.module("almundo").config(["$stateProvider",function(e){e.state("hoteles",{url:"/",controller:"HotelesMainCtrl as vm",templateUrl:"/components/view.main-hoteles.html"}).state("editHotel",{url:"/edit/:hotelId",controller:"EditHotelCtrl as vm",templateUrl:"/components/view.hotel.html"}).state("newHotel",{url:"/add",controller:"NewHotelCtrl as vm",templateUrl:"/components/view.hotel.html"})}]),angular.module("almundo").directive("menu",[MenuDir]),angular.module("almundo").factory("HotelesFactory",["$http","$rootScope",HotelesFactory]),angular.module("almundo").controller("EditHotelCtrl",["HotelesFactory","$state","$stateParams",EditHotelCtrl]),angular.module("almundo").controller("HotelesMainCtrl",["HotelesFactory","$state",HotelesMainCtrl]),angular.module("almundo").controller("NewHotelCtrl",["HotelesFactory","$state",NewHotelCtrl]);