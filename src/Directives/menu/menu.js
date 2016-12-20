function MenuDirectiveCtrl($mdSidenav) {
	function toogle() {
		if (this.sideBar) {
			$mdSidenav('menu').toggle();
		}
		return;
	}

	var vm = this;
	vm.toogle = toogle;
}

function MenuDir() {	
	var directive = {
		templateUrl: '/components/directive.menu.html',
		restrict: 'EA',
		scope: {
			sideBar: '=sideBar'
		},
		controller: ['$mdSidenav', MenuDirectiveCtrl],
		replace: 'true',
		controllerAs: 'vm',
		bindToController: true
	};

	return directive;
}

angular
.module('almundo')
.directive('menu', [MenuDir]);
