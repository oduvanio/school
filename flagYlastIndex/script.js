let text = "hello1 hello2 hello3",
	pattern = /hello\d\s?/,
	result = pattern.exec(text),
	globalPattern = /hello\d\s?/g,
	globalResult = globalPattern.exec(text),
	stickyPattern = /hello\d\s?/y,
	stickyResult = stickyPattern.exec(text);

console.log(result[0]); // "hello1 "
console.log(globalResult[0]); // "hello1 "
console.log(stickyResult[0]); // "hello1 "

console.log(pattern.lastIndex); // 0
console.log(globalPattern.lastIndex); // 7
console.log(stickyPattern.lastIndex); // 7

result = pattern.exec(text);
globalResult = globalPattern.exec(text);
stickyResult = stickyPattern.exec(text);

console.log(result[0]); // "hello1 "
console.log(globalResult[0]); // "hello2 "
console.log(stickyResult[0]); // "hello2"

console.log(pattern.lastIndex); // 0
console.log(globalPattern.lastIndex); // 14
console.log(stickyPattern.lastIndex); // 14
