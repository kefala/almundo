function MenuDir() {
	return {
		templateUrl: '/components/directive.menu.html',
		restrict: 'AE',
		replace: 'true'
	};
}

angular
	.module('almundo')
	.directive('menu', [MenuDir]);