app.directive('singleCart', function(listService){
	   return {
		     restrict: 'E', 
		     link: function(scope, element, attr){
		     		scope.plus = function(){
		     			scope.item.num ++;
		     		}
		     		scope.minus = function(){
		     			if(scope.item.num === 0){
		     				return;
		     			}
		     			scope.item.num --;
		     		}
		     		scope.$watch('item',function(newvalue,oldvalue){
		     			listService.setCart(newvalue,scope); //给本地缓存提供数据
		     		},true)
		     },
		     //template: '<div>hello world!</div>', //自定义标签中的视图，dom
		     templateUrl: '/widget/cart.html',  //替换标签内容
		     replace: true,                     //把自定义标签的名字进行替换
		     scope: {                           //让自定义组件中的作用域互相的独立
			       //tcolor: '=rt',  //=等于号代表了属性中的value值是
			       //name: '@name'     //利用@符号，得到属性中的具体的，真正的value值。
			       item:'=item',
			       list:'=list',
			       index:'=index'
		     }
	   };    
});