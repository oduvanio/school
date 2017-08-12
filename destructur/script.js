var aa = 10, bb = 20;
var o = {x: aa, y: bb};
var {x: AA, y: BB} = o;
console.log( AA, BB ); // 10 20

function foo() {
	return [1, 2, 3];
}
function bar() {
	return {
		x: 4,
		y: 5,
		z: 6
	};
}
var a,b,c,x,y,z;
[a,b,c] = foo();
( {x,y,z} = bar() );
console.log( a, b, c); // 1 2 3
console.log( x, y, z); // 4 5 6

var o = {};
[o.a, o.b, o.c] = foo();
( { x: o.x, y: o.y, z: o.z } = bar() );
console.log( o.a, o.b, o.c ); // 1 2 3
console.log( o.x, o.y, o.z ); // 4 5 6

// выражения для вычисляемых свойств
var which = "x",
	o = {};
( { [which]: o[which] } = bar() );
console.log( o.x ); // 4

// преобразование объекта
var o1 = { a: 1, b: 2, c: 3 },
	o2 = {};
( { a: o2.x, b: o2.y, c: o2.z } = o1 );
console.log( o2.x, o2.y, o2.z ); // 1 2 3

// объект в массив
var o1 = { a: 1, b: 2, c: 3 },
	a2 = [];
( {a: a2[0], b: a2[1], c: a2[2] } = o1 );
console.log(a2); // [1, 2, 3]

// массив в объект
var a1 = [ 1, 2, 3 ],
	o2 = {};
[ o2.a, o2.b, o2.c ] = a1;
console.log( o2.a, o2.b, o2.c ); // 1 2 3

// преобразование одного массива в другой
var a1 = [ 1, 2, 3],
	a2 = [];
[ a2[2], a2[0], a2[1] ] = a1;
console.log( a2 ); // [2, 3, 1]

// обмен значениями двух переменных, не прибегая к дополнительной переменной
var x = 10, y = 20;
[ y, x ] = [ x, y ];
console.log( x, y ); // 20 10

// деструктурирующее извлечение данных из объекта
var o = { a: 1, b: 2, c: 3 },
	a, b, c, p;
p = { a, b, c } = o;
console.log( a, b, c ); // 1 2 3
console.log(p === o); // true

// деструктурирующее извлечение данных из массива
var o = [1,2,3],
	a, b, c, p;
p = { a, b, c } = o;
console.log( a, b, c ); // 1 2 3
console.log(p === o);

// соединение деструктурирующих присваиваний в цепочку
var o = { a:1, b:2, c:3 },
	p = [4,5,6],
	a, b, c, x, y, z;
( {a} = {b,c} = o );
[x,y] = [z] = p;
console.log( a, b, c ); // 1 2 3
console.log( x, y, z); // 4 5 4

var { a: X, a: Y } = { a: 1 };
console.log( X ); // 1
console.log( Y ); // 1

var { a: { x: X, x: Y }, a } = { a: { x: 1 } };
console.log( X ); // 1
console.log( Y ); // 1
console.log( a ); // { x: 1 }

( { a: X, a: Y, a: [ Z ] } = { a: [ 1 ] } );
X.push( 2 );
Y[0] = 10;
console.log( X ); // [10, 2]
console.log( Y ); // [10, 2]
console.log( Z ); // 1

// не обязательны все аргументы
var [,b] = foo();
var { x, z } = bar();
console.log( b, x, z ); // 2 4 6

// большее значение или отсутсвующие = undefined
var [,,c,d] = foo();
var { w, z } = bar();
console.log( c, z ); // 3 6
console.log( d, w ); // undefined undefined

// spread и rest в деструктуризации
var a = [2,3,4];
var b = [ 1, ...a, 5 ];
console.log( b ); // [1,2,3,4,5]

var a = [2,3,4];
var [ b, ...c ] = a;
console.log( b, c ); // 2 [3,4]

// присваивание к значениям по умолчанию
var [ a = 3, b = 6, c = 9, d = 12 ] = foo();
var { x = 5, y = 10, z = 15, w = 20 } = bar();
console.log( a, b, c, d); // 1 2 3 12
console.log( x, y, z, w); // 4 5 6 20

var { x, y, z, w: WW = 20 } = bar();
console.log( x, y, z, WW ); // 4 5 6 20

// не советуют использовать объекты или массивы в качестве значений по умолчанию при деструктуризации, т.к. код понять будет сложно
var x = 200, y = 300, z = 100;
var o1 = { x: { y: 42 }, z: { y: z } };
( { y: x = { y: y } } = o1 ); // x = 300
( { z: y = { y: z } } = o1 ); // y = 100
( { x: z = { y: x } } = o1 );
console.log( x.y, y.y, z.y ); // 300 100 42

// деструктурирующее присваивание возможно при любом уровне вложенности
var a1 = [ 1, [2, 3, 4], 5 ];
var o1 = { x: { y: { z: 6 } } };
var [ a, [ b, c, d ], e ] = a1;
var { x: { y: { z: w } } } = o1;
console.log( a, b, c, d, e ); // 1 2 3 4 5
console.log( w ); // 6

// деструктуризация для сведения простанств имен
var App = {
	model: {
		User: function(){}
	}
};
// вместо: var User = App.model.User;
var { model: { User } } = App;

// деструктуризация параметров
function fooo( [ x, y ] ) {
	console.log( x, y );
}
fooo( [ 1, 2 ] ); // 1 2
fooo( [ 1 ] ); // 1 undefined
fooo( [] ); //undefined undefined

function fooo( { x, y } ) {
	console.log( x, y );	
}
foo( { y: 1, x: 2 } ); // 2 1
foo( { y: 42 } ); // undefined 42
foo( {} ); // undefined undefined

function f1([ x=2, y=3, z ]) {}
function f2([ x, y, ...z], w) {}
function f3([ x, y, ...z], ...w) {console.log( x, y, z, w );}
function f4({ x: X, y }) {}
function f5({ x: X = 10, y = 20 }) {}
function f6({ x = 10 } = {}, { y } = { y: 10 }) {}

f3( [] ); // undefined undefined [] []
f3( [1,2,3,4], 5, 6 ); // 1 2 [3,4] [5,6]

// Нюанс, который сложно заметить
function f6({ x = 10 } = {}, { y } = { y: 10 }) {
	console.log( x, y );
}
f6(); // 10 10
f6( undefined, undefined );	// 10 10
f6( {}, undefined );	// 10 10
f6( {}, {} );	// 10 undefined
f6( undefined, {} ); // 10 undefined
f6( { x: 2 }, { y: 3 } ); // 2 3


// Вложенные значения по умолчанию
var defaults = {
	options: {
		remove: true,
		enable: false,
		instance: {}
	},
	log: {
		warn: true,
		error: true
	}
};

var config = {
	options: {
		remove: false,
		instance: null
	}
};

config.options = config.options || {};
config.log = config.log || {};
{
	options: {
		remove: config.options.remove = default.options.remove,
		enable: config.options.enable = default.options.enable,
		instance: config.options.instance = default.options.instance
	} = {},
	log: {
		warn: config.log.warn = default.log.warn,
		error: config.log.error = default.log.error
	} = {}
} = config;

// сливаем defaults в config
{
	// деструктуризация (с присваиваниями значений по умолчанию)
	let {
		options: {
			remove = defaults.options.remove,
			enable = defaults.options.enable,
			instance = defaults.options.instance
		} = {},
		log: {
			warn = defaults.log.warn,
			error = defaults.log.error
		} = {}
	} = config;
	
	// реструктуризация
	config = {
		options: { remove, enable, instance },
		log: { warn, error }	
	};
}
