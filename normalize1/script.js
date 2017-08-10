let normalized = values.map(function(text) {
	return text.normalize();
});
normalized.sort(function(first, second) {
	if (first < second) {
		return -1;
	} else if (first === second) {
		return 0;
	} else {
		return 1;
	}
});
