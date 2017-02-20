app.directive('tabList', function(){
	   return {
		     restrict: 'E', 
		     link: function(scope, element, attr){
		     	scope.getStatus = function(index){
		     		for(var i = 0;i < scope.list.length;i ++){
		     			scope.list[i].active = false;
		     		}
		     		scope.list[index].active = true;
		     	}
		     	scope.list = [{
		     		link:'#/home',
		     		icon:'ion-home',
		     		name:'首页',
		     		active:false
		     	},{
		     		link:'#/active',
		     		icon:'ion-ribbon-a',
		     		name:'品牌团',
		     		active:false
		     	},{
		     		link:'#/money',
		     		icon:'ion-briefcase',
		     		name:'红包',
		     		active:false
		     	},{
		     		link:'#/cart',
		     		icon:'ion-android-cart',
		     		name:'购物车',
		     		active:false
		     	},{
		     		link:'#/info',
		     		icon:'ion-android-contact',
		     		name:'我的',
		     		active:false
		     	}]
		     	for(var i = 0;i < scope.list.length;i ++){
		     		if(location.hash === scope.list[i].link){
		     			scope.list[i].active = true;
		     		}
		     	}
		     },
		     //template: '<div>hello world!</div>', //自定义标签中的视图，dom
		     templateUrl: 'widget/tablist.html',  //替换标签内容
		     replace: true,                     //把自定义标签的名字进行替换
		     scope: {                           //让自定义组件中的作用域互相的独立
			       //tcolor: '=rt',  //=等于号代表了属性中的value值是
			       //name: '@name'     //利用@符号，得到属性中的具体的，真正的value值。
		     }
	   };    
});