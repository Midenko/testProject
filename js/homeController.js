angular.module("testApp")
	.controller("homeController", function (itemsService, $state) {
		let vm = this;

		vm.itemsService = itemsService;

		vm.selectAll = function () {
			vm.itemsService.typeStates.forEach(
				function (item, index) {
					item.isChecked = true;
				});
		}

		vm.toItem = function (item) {
			itemsService.id = item.id;
			$state.transitionTo('item', {
				'id': itemsService.id
			});
		}

	});
