function foo(strings, ...values) {
	console.log( strings );
	console.log( values );
}
var desc = "awesome";
foo`Everything is ${desc}!`;
// [ "Everything is ", "!"]
// [ "awesome" ]

function bar() {
	return function foo(strings, ...values) {
		console.log( strings );
		console.log( values );	
	}
}
var desc = "awesome";
var des = "awes";
bar()`Everything is ${desc}!${des}!!!`;
// [ "Everything is ", "!"]
// [ "awesome" ]

function tag(strings, ...values) {
	return strings.reduce( function(s,v,idx){
		console.log(s);
		console.log(v);
		console.log(idx);
		return s + (idx > 0 ? values[idx-1] : "") + v;
	}, "" );
}
var desc = "awesome";
var text = tag`Everything is ${desc}!`;
console.log( text ); // Everything is awesome!

function dollabillsyall(strings, ...values) {
	return strings.reduce( function(s,v,idx){
		if (idx > 0) {
			if (typeof values[idx-1] == "number") {
				s += `$${values[idx-1].toFixed( 2 )}`;
			}
			else {
				s += values[idx-1];
			}
		}
		return s + v;
	}, "" );
}
var amt1 = 11.99,
	amt2 = amt1 * 1.08,
	name = "Кайл";
var text = dollabillsyall`Спасибо за покупку, ${name}! Выбранный вами Продукт стоил ${amt1}, что вместе с НДС составляет ${amt2}.`;
console.log( text );
