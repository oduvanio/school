console.log("x".repeat(3)); // "xxx"
console.log("hello".repeat(2)); // "hellohello"
console.log("abc".repeat(4)); // "abcabcabcabc"

// отступ с определенным количеством пробелов
let indent = " ".repeat(4),
	indentLevel = 0;

// всякий раз, когда нужно увеличить отступ
let newIndent = indent.repeat(++indentLevel);
