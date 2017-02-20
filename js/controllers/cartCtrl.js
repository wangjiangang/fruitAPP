app.controller('cartCtrl', ['$scope','listService', function(scope,list){
	//建立数据与视图的双向绑定
	scope.name = '购物车';
	var data = list.getCart();
	if(data){
		scope.list = data;
	}
}]);
