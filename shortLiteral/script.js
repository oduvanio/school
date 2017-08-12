// старая запись
var x = 2, y = 3,
	o = {
		x: x,
		y: y		
	};
// новая запись
var x = 2, y = 3,
	o = {
		x,
		y
	};
// старая запись метода
var o = {
	x: function(){

	},
	y: function(){

	}
}
// новая запись метода
var o = {
	x(){

	},
	y(){

	}
}

// новая запись для генераторов
var o = {
	*foo() {

	}
};

// подводный камень записи новым способом
// запись старым методом, который будем переписывать новым
function runSomething(o) {
	var x = Math.random(),
	y = Math.random();
	return o.something( x, y );
}
runSomething( {
	something: function something(x,y) {
		if (x > y) {
			// рекурсивный вызов с заменой 'x' и 'y'
			return something( y, x );
		}
		return y - x;
	}
});
// запись новым методом
runSomething( {
	something(x,y) {
		if (x > y) {
			return something( y, x );
		}
		return y - x;	
	}
} );
//вывод. Если используется рекурсивная функция, то нужно пользоваться старым методом записи
