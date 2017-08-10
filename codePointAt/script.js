let text = String.fromCodePoint(134071) + "a";
console.log(text.charCodeAt(0)); // 55362
console.log(text.charCodeAt(1)); // 57271
console.log(text.charCodeAt(2)); // 97

console.log(text.codePointAt(0)); // 134071
console.log(text.codePointAt(1)); // 57271
console.log(text.codePointAt(2)); // 97

function is32Bit(c) {
	return c.codePointAt(0) > 0xFFFF;
}
console.log(is32Bit(text)); // true
console.log(is32Bit("a")); //false
