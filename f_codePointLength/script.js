function codePointLength(text) {
	let result = text.match(/[\s\S]/gu);
	return result ? result.length : 0;
}
console.log(codePointLength("abc")); // 3
console.log(codePointLength(String.fromCodePoint(134071) + "bc")); // 3
