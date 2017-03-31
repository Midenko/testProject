angular.module("Service", [])
	.factory("itemsService", function ($filter) {

		return {
			items: [
				{
					id: 01,
					name: 't-shirt',
					smallImg: 'small1.png',
					bigImg: 'big1.png',
					price: 5,
					type: 'men',
					attribute: {
						name: 'size',
						values: ['xl', 'x']
					},
					colors: ['#535253', '#ffe637', '#165eb9'],
					typeInd: 0
			},
				{
					id: 02,
					name: 'pants forclaz',
					smallImg: 'small2.png',
					bigImg: '',
					price: 30,
					type: 'men',
					attribute: {
						name: 'size',
						values: ['xl', 'x']
					},
					colors: [],
					typeInd: 0
			},
				{
					id: 03,
					name: 'backpack',
					smallImg: 'small3.png',
					bigImg: '',
					price: 60,
					type: 'men',
					attribute: {
						name: '10litri',
						values: []
					},
					colors: [],
					typeInd: 0
			},
				{
					id: 04,
					name: 'giacket',
					smallImg: 'small4.png',
					bigImg: '',
					price: 60,
					type: 'women',
					attribute: {
						name: 'size',
						values: ['xl', 'x']
					},
					colors: [],
					typeInd: 1
			},
				{
					id: 05,
					name: 'trecking shoes',
					smallImg: 'small5.png',
					bigImg: '',
					price: 80,
					type: 'women',
					attribute: {
						name: 'size',
						values: ['xl', 'x']
					},
					colors: [],
					typeInd: 1
			},
				{
					id: 06,
					name: 't-shirt',
					smallImg: 'small6.png',
					bigImg: '',
					price: 20,
					type: 'women',
					attribute: {
						name: 'size',
						values: ['xl', 'x']
					},
					colors: ['#ffffff', '#d3a7ac'],
					typeInd: 1
			}
			 		],

			getItems: function () {
				return this.items;
			},

			getItem: function (id) {
				return this.items[id - 1];
			},

			sorted: ["price", "name"],

			typeStates: [
				{
					name: 'men',
					goods: [],
					isChecked: true
					},
				{
					name: 'women',
					goods: [],
					isChecked: true
					},
				{
					name: 'children',
					goods: [],
					isChecked: false
					}
				],


			getAllByTypes: function () {
				let data = this.getItems();

				this.typeStates.forEach(
					function (item, index) {
						let typeName = item.name;
						var goods = data.filter(function (item) {
							return item.type === typeName;
						});
						item.goods = goods;
					});
				return this.typeStates;
			},
			

		};
	});
