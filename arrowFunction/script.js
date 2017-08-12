var f1 = () => 12;
var f2 = x => x * 2;
var f3 = (x,y) => {
	var z = x * 2 + y;
	y++;
	x *= 3;
	return (x + y + z) / 2;
};
console.log(f1());
console.log(f2(5));
console.log(f3(4,2));

var dollabillsyall = (strings, ...values) =>
	strings.reduce( (s,v,idx) => {
		if (idx > 0) {
			if (typeof values[idx-1] == "number") {
				s += `$${values[idx-1].toFixed( 2 )}`;
			} else {
				s += values[idx-1];
			}
		}
		return s + v;
	}, "" );


var controller = {
	makeRequest: function(){
		var self = this;
		btn.addEventListener( "click", function(){
			self.makeRequest();
		}, false );
	}
};

var controller = {
	makeRequest: function(){
		btn.addEventListener( "click", () => {
			this.makeRequest();
		}, false );
	}
};

var controller = {
	makeRequest: () => {
		this.helper();
	},
	helper: () => {

	}
};
controller.makeRequest();
