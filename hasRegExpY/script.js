function hasRegExpY() {
	try {
		var pattern = new RegExp(".", "y");
		return true;
	} catch (ex) {
		return false;
	}
}
