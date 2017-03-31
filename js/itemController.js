angular.module("testApp")
	.controller("itemController", function (itemsService, $state) {
		'use strict';

		let vm = this;
		vm.id = itemsService.id;
		vm.item = itemsService.getItem(vm.id);
		vm.info = ["price", "colors", "sizes"];

		vm.backHome = function () {
			$state.transitionTo('home');
		}
	});
