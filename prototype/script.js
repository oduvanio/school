var o1 = {

};
var o2 = {
	__proto__: o1
};

// для задания [[Prototype]] существующего объекта в ES6 применяется метод Object.setPrototypeOf()
var o1 = {

};
var o2 = {

};
Object.setPrototypeOf( o2, o1 );
