values.sor(function(first, second) {
	let firstNormalized = first.normalize("NFD"),
		secondNormalized = second.normalize("NFD");
	if (firstNormalized < secondNormalized) {
		return -1;
	} else if (firstNormalized === secondNormalized) {
		return 0;
	} else {
		return 1;
	}
});
