app.controller('homeCtrl', ['$scope','listService', function(scope,list){
	scope.name = '首页';
	if(list.getData()){    //如果有了数据就不需要再获取了
		scope.homedata = list.getData();
		return;
	}
	list.getHttpData(function(res){
		var data = res.product_list.slice(1);
		var cartlist = list.getCoreCartData();
		for(var key in data){
			data[key].num = 0;
			for(var i in cartlist){
				if(data[key].name == cartlist[i].name){
					data[key].num = cartlist[i].num;
				}
			}
		}
		//console.log(data);
		list.setData(data); //对从服务器获取到的数据进行保存
		scope.homedata = data;  //双向绑定
	})
}]);
