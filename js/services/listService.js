app.factory('listService',function($http){
	var list = $http({
		url:'http://as-vip.missfresh.cn/v2/product/home/index?device_id=b3462e720b2ceae08bdc22e8f3d54b76&env=web&platform=web&tdk=148654802872844388283&uuid=b3462e720b2ceae08bdc22e8f3d54b76&version=2.3.4',
		method:'post',
		data:{
			lat:40.11722,
			lng:116.25003
		}
	})
	//本地缓存函数
	function Store(spaceName,data){
		if(data){
			localStorage.setItem(spaceName,JSON.stringify(data));
			return;
		}
		return (spaceName && JSON.parse(localStorage.getItem(spaceName))) || null;
	}
	//转换成数组
	function getCartList(obj){
		var arr = [];
		for(var key in obj){
			arr.push(obj[key]);
		}
		return arr;	 	
	}
	var coreData = null;
	var coreCartData = {};  //购物车对象
	return{
		getHttpData:function(callback){
			list.success(callback);	 //获取成功后的回调函数	
		},
		setData:function(data){
			coreData = data; 	
		},
		getData:function(){
			return coreData;
		},
		getCart:function(){
			var arr = [];
			if(!coreData){
				//得到缓存里的购物车
				coreCartData = Store('cartlist') || {};
				console.log(coreCartData);
				return coreCartData || false;   //(coreCartData && getCartList(coreCartData))
			}
			for(var i = 0;i < coreData.length;i ++){
				if(coreData[i].num !== 0){
					arr.push(coreData[i])
				}
			}
			return arr;
		},
		setCart:function(item,scope){
			coreCartData[item.name] = item;
			//删除条目
			if(item.num === 0){
				delete coreCartData[item.name];
				if(scope && scope.list){
					scope.list.splice(scope.index,1);
				}
			}
			Store('cartlist',coreCartData)	 	
		},
		getCoreCartData:function(){
			return Store('cartlist') || {};
		}
	}
})
