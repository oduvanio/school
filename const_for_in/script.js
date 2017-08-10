var funcs = [],
object = {
	a: true,
	b: true,
	c: true
}
// не вызовет ошибку
for (const key in object) {
	funcs.push(function() {
		console.log(key);
	});
}
funcs.forEach(function(func) {
	func(); // выведет "a", затем "b", затем "c"
})
