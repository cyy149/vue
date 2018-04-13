vue
简单实现vue双向数据绑定
#
	var obj = {}
	Object.defineProperty(obj, 'hello', {
		get: function () {
			console.log('get方法被调用了')
		},
		set: function (val) {
			console.log('set方法被调用了，参数是' + val)
		}
	});

	obj.hello;
	obj.hello = '123'
#
get 和 set 方法内部的 this 都指向 obj，这意味着 get 和 set 函数可以操作对象内部的值。另外，访问器属性的会"覆盖"同名的普通属性，因为访问器属性会被优先访问，与其同名的普通属性则会被忽略。
#
		var obj ={}
		var a = document.getElementById('a');
		var b = document.getElementById('b');

		Object.defineProperty(obj, 'hello', {
			
			set: function (newValue) {
				a.value = newValue;
				b.innerHTML = newValue;
			}

		});
		document.addEventListener('keyup', function (e) {
			obj.hello = e.target.value;
		});
#
此例实现的效果是：随文本框输入文字的变化，span 中会同步显示相同的文字内容；在js或控制台显式的修改 obj.hello 的值，视图会相应更新。这样就实现了 model => view 以及 view => model 的双向绑定。
