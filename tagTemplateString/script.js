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
		return s + (idx > 0 ? values[idx-1] : "") + v;
	}, "" );
}
var desc = "awesome";
var text = tag`Everything is ${desc}!`;
console.log( text ); // Everything is awesome!
