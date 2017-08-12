var o = {
	__id: 10,
	get id() { return this.__id++; },
	set id(v) { this.__id = v; }
}
console.log(o.id); // 10
console.log(o.id); // 11
o.id = 20;
console.log(o.id); // 20
console.log(o.__id); // 21
console.log(o.__id); // 21
console.log(o.id); // 21
console.log(o.__id); // 22
