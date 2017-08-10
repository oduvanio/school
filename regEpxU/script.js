let text = String.fromCodePoint(134071);
console.log(text.length); // 2
console.log(/^.$/.test(text)); // false
console.log(/^.$/u.test(text)); // true
