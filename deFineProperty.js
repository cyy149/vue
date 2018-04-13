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