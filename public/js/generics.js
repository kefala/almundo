function MenuDir(){return{templateUrl:"/components/directive.menu.html",restrict:"AE",replace:"true"}}function HotelesFactory(e,o){var t={getHoteles:function(){return e({cache:!1,responseType:"json",headers:{"Content-Type":"application/json"},method:"GET",url:o.apiHost+"/hoteles"})}};return t}function HotelesMainCtrl(e){var o=this;console.log("HotelesMainCtrl");var t="img/list/60.jpeg";o.todos=[];for(var n=0;n<15;n++)o.todos.push({face:t,what:"Brunch this weekend?",who:"Min Li Chan",notes:"I'll be in your neighborhood doing errands."})}angular.module("almundo",["ngMaterial","ngRoute","ui.router"]),angular.element(document).ready(function(){angular.bootstrap(document,["almundo"])}),angular.module("almundo").run(["$rootScope",function(e){location.host.indexOf("jabamastudio.com")!=-1?e.apiHost="//api-resto.jabamastudio.com":e.apiHost="//localhost:3000"}]),angular.module("almundo").config(["$httpProvider","$stateProvider","$urlRouterProvider","$mdThemingProvider",function(e,o,t,n){t.otherwise("/"),n.theme("default").primaryPalette("orange").accentPalette("blue")}]),angular.module("almundo").config(["$stateProvider",function(e){e.state("hoteles",{url:"/",controller:"HotelesMainCtrl as vm",templateUrl:"/components/view.main-hoteles.html"})}]),angular.module("almundo").directive("menu",[MenuDir]),angular.module("almundo").factory("HotelesFactory",["$http","$rootScope",HotelesFactory]),angular.module("almundo").controller("HotelesMainCtrl",["HotelesFactory",HotelesMainCtrl]);