function MenuDirectiveCtrl(e){function t(){this.sideBar&&e("menu").toggle()}var o=this;o.toogle=t,console.log(o.sideBar)}function MenuDir(){var e={templateUrl:"/components/directive.menu.html",restrict:"EA",scope:{sideBar:"=sideBar"},controller:["$mdSidenav",MenuDirectiveCtrl],replace:"true",controllerAs:"vm",bindToController:!0};return e}function HotelesFactory(e,t){var o={getHoteles:function(){return e({cache:!1,responseType:"json",headers:{"Content-Type":"application/json"},method:"GET",url:t.apiHost+"/api//hotel"})}};return o}function filter(e,t,o){for(var r=[],n=e.length-1;n>=0;n--)e[n].price<=t&&e[n].stars<=o&&r.push(e[n]);return r}function HotelesMainCtrl(e){function t(){n.hotels=filter(hotels,n.filters.price,n.filters.stars),r()}function o(){n.hotels=filter(hotels,n.filters.price,n.filters.stars),r()}function r(){n.isNevahToShow=!(n.hotels.length||n.hotels.length<0)}var n=this;n.hotels=[],hotels=[],n.isNevahToShow=!1,n.onPriceFilterChange=t,n.onStarsFilterChange=o,n.filters={price:1e4,stars:5},e.getHoteles().then(function(e){n.hotels=e.data,hotels=e.data,r()},function(e){console.log(e)})}angular.module("almundo",["ngMaterial","ngRoute","ui.router"]),angular.element(document).ready(function(){angular.bootstrap(document,["almundo"])}),angular.module("almundo").run(["$rootScope",function(e){location.host.indexOf("jabamastudio.com")!=-1?e.apiHost="//api-resto.jabamastudio.com":e.apiHost="//localhost:3000"}]),angular.module("almundo").config(["$httpProvider","$stateProvider","$urlRouterProvider","$mdThemingProvider",function(e,t,o,r){o.otherwise("/"),r.theme("default").primaryPalette("orange").accentPalette("blue")}]),angular.module("almundo").config(["$stateProvider",function(e){e.state("hoteles",{url:"/",controller:"HotelesMainCtrl as vm",templateUrl:"/components/view.main-hoteles.html"})}]),angular.module("almundo").directive("menu",[MenuDir]),angular.module("almundo").factory("HotelesFactory",["$http","$rootScope",HotelesFactory]),angular.module("almundo").controller("HotelesMainCtrl",["HotelesFactory",HotelesMainCtrl]);