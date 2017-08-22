class Foo {
	constructor(a,b) {
		this.x = a;
		this.y = b;
	}
	gimmeXY() {
		return this.x * this.y;
	}
}

class Bar extends Foo {
	constructor(a,b,c) {
		super(a,b);
		this.z = c;
	}
	gimmeXYZ() {
		return super.gimmeXY() * this.z;
	}
}

// сюрпризы super
class ParentA {
	constructor() {
		this.id = "a";
	}
	foo() {
		console.log( "ParentA:", this.id);
	}
}
class ParentB {
	constructor() {
		this.id = "b";
	}
	foo() {
		console.log( "ParentB:", this.id);
	}
}
class ChildA extends ParentA {
	foo() {
		super.foo();
		console.log( "ChildA:", this.id );
	}
}
class ChildB extends ParentB {
	foo() {
		super.foo();
		console.log( "ChildB:", this.id );
	}
}

var a = new ChildA();
a.foo();
var b = new ChildB();
b.foo();
b.foo.call(a);

// Расширения встроенных объектов
class MyCoolArray extends Array {
	first() { return this[0]; }
	last() { return this[this.length - 1]; }
}
var a = new MyCoolArray( 1, 2, 3);
console.log(a.length); //3
console.log(a); [1, 2, 3]
console.log(a.first()); // 1
console.log(a.last()); // 3

class Oops extends Error {
	constructor(reason) {		
		this.oops = reason;
	}
}

var ouch = new Oops( "I messed up!" );
throw ouch;

// new.target
class Foo {
	constructor() {
		console.log( "Foo: ", new.target.name );
	}	
}
class Bar extends Foo {
	constructor() {
		super();
		console.log( "Bar: ", new.target.name );
	}
	baz() {
		console.log( "baz: ", new.target );
	}
}
var a = new Foo(); // Foo: Foo
var b = new Bar(); // Foo: Bar <-- учитывает сторону, вызвавшую 'new'
		   // Bar: Bar
b.baz(); // baz: undefined

// Ключевое слово static
class Foo {
	static cool() {console.log( "cool" ); }
	wow() {console.log( "wow" );}
}
class Bar extends Foo {
	static awesome() {
		super.cool();
		console.log( "awesome" );
	}
	neat() {
		super.wow();
		console.log( "neat" );
	}
}

Foo.cool(); // "cool"
Bar.cool(); // "cool"
Bar.awesome(); // "cool"
	       // "awesome"
var b = new Bar();
b.neat(); // "wow"
	  // "neat"
b.awesome; // undefined
b.cool; // undefined

// Symbol.species
class MyCoolArray extends Array {
	// принудительно превращаем 'species' в родительский конструктор
	static get [Symbol.species]() {return Array; }
}
 var a = new MyCoolArray( 1, 2, 3 ),
b = a.map( function(v){return v * 2; } );
b instanceof MyCoolArray; // false
b instanceof Array; // true
