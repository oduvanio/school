var arr = [1,2,3];
var it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

var greeting = "Hello world";
var it = greeting[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

var m = new Map();
m.set( "foo", 42);
m.set( { cool: true }, "hello world" );
var it1 = m[Symbol.iterator]();
var it2 = m.entries();
console.log(it1.next());
console.log(it2.next());
console.log(it1.next());
console.log(it2.next());


var it = {
	// делаем итератор 'it' итерируемым
	[Symbol.iterator]() {return this; },
	next() {
		//return {value: v, done: false};	
	}
};
console.log(it[Symbol.iterator]() === it);

// Итератор генерирующий числа Фибоначи
var Fib = {
	[Symbol.iterator]() {
		var n1 = 1, n2 = 1;
		return {
			// делаем итератор итерируемым
			[Symbol.iterator]() {return this; },
			next() {
				var current = n2;
				n2 = n1;
				n1 = n1 + current;
				return {value: current, done: false };
			},
			return(v) {
				console.log("Последовательность Фибоначчи завершена.");
				return { value: v, done: true };
			}
		};
	}
};

for (var v of Fib) {
	console.log( v );
	if (v > 50) break;
}

// Итератор выполняющий по очереди некоторые действия
var tasks = {
	[Symbol.iterator]() {
		var steps = this.actions.slice();
		return {
			// делаем итератор итерируемым
			[Symbol.iterator]() { return this; },
			next(...args) {
				if (steps.length > 0) {
					let res = steps.shift()(...args);
					return { value: res, done: false };
				}
				else {
					return { done: true }
				}
			},
			return(v) {
				steps.length = 0;
				return { value: v, done: true };
			}
		};
	},
	actions: []
};

tasks.actions.push(
	function step1(x) {
		console.log( "step 1:", x );
		return x * 2;
	},
	function step2(x,y) {
		console.log( "step 2:", x, y );
		return x + (y * 2);
	},
	function step3(x,y,z) {
		console.log( "step 3:", x, y, z );
		return (x * y) + z;
	}
);
var it = tasks[Symbol.iterator]();
it.next( 10 );
it.next( 20, 50);
it.next( 20, 50, 120);
it.next();

// Творческий подход с итераторами (итератор для чисел в диапазоне от 0 до заданного положительного или отрицательного значения)
if (!Number.prototype[Symbol.iterator]) {
	Object.defineProperty(
		Number.prototype,
		Symbol.iterator,
		{
			writable: true,
			configurable: true,
			enumerable: false,
			value: function iterator(){
				var i, inc, done = false, top = +this;
				// итерации в положительную или отрицательную сторону
				inc = 1 * (top < 0 ? -1 : 1);
				return {
					// делаем итерируемым сам итератор
					[Symbol.iterator](){ return this; },
					next() {
						if (!done) {
							// начальная итерация всегда 0
							if (i == null) {
								i = 0;
							}
							// итерация в положительном направлении
							else if (top >= 0) {
								i = Math.min(top, i + inc);
							}
							// итерация в отрицательном направлении
							else {
								i = Math.max(top, i + inc);
							}
							// закончить после этой итерации?
							if (i == top) done = true;
							return {value: i, done: false };
						} else {
							return { done: true };
						}
					}
				};
			}
		}
	);
}
for (var i of 3) {
	console.log(i);
}
for (var i of [...-3]) {
	console.log(i);
}
