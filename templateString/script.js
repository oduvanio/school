// до ES6
var name = "Kyle";
var greeting = "Hello " + name + "!";
console.log( greeting ); // "Hello Kyle!"
console.log( typeof greeting ); // "string"

// в ES6
var name = "Kyle";
var greeting = `Hello ${name}!`;
console.log( greeting ); // "Hello Kyle!"
console.log( typeof greeting ); // "string"

// внутри ${} могут находится любые выражения
function upper(s) {
	return s.toUpperCase();
}
var who = "reader";
var text = `A very ${upper( "warm" )} welcome to all of you ${upper( `${who}s` )}!`;
console.log( text ); // A very WARM welcome to all of you READERS!
