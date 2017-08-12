var prefix = "user_";
var o = {
	baz: function(){}
};
o[ prefix + "foo" ] = function(){};
o[ prefix + "bar" ] = function(){};

// в ES6 результат выражения является именем свойства
var prefix = "user_";
var o = {
	baz: function(){},
	[ prefix + "foo" ]: function(){},
	[ prefix + "bar" ]: function(){}
};
// Внутрь скобок можно поместить любое действительное выражение
var o = {
	[Symbol.toStringTag]: "really cool thing"
}; 

// вычисляемые свойства как краткие методы и краткие генераторы
var o = {
	["f" + "oo"](){}, // вычисляемый краткий метод
	*["b" + "ar"](){} // вычисляемый краткий генератор
}
