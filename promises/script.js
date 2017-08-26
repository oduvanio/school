
var p1 = Promise.resolve( 42 );
var p2 = new Promise( function pr(resolve){
	setTimeout( function() {
		resolve( 43 );
	}, 100 );
} );
var v3 = 44;
var p4 = new Promise( function pr(resolve, reject){
	setTimeout( function() {
		reject( "Oops" );
	}, 1000 );
} );

Promise.all( [p1, p2, v3] )
.then( function fulfilled(vals){
	console.log( vals );
} );
Promise.all( [p1, p2, v3, p4] )
.then(
	function fulfilled(vals){
		// сюда мы никогда не попадем
	},	
	function rejected(reason){
		console.log( reason );
	}
);


function run(gen) {
	var args = [].slice.call( arguments, 1), it;
	it = gen.apply( this, args );
	return Promise.resolve()
		.then( function handleNext(value){
			var next = it.next( value );
			return (function handleResult(next){
				if (next.done){
					return next.value;
				}
				else {
					return Promise.resolve( next.value )
						.then(
							handleNext,
							function handleErr(err) {
								return Promise.resolve(
									it.throw( err )
								)
								.then( handleResult );
							}
					);				
				}
			})( next );
		});
}
function ajax(bul) {
	return new Promise( function pr(resolve, reject){
		setTimeout(function(){
			if (bul) {
				resolve(bul);
			} else {
				reject(bul);
			}
		}, 1000);	
	});
}

p = ajax(false);
p.then(function(contents){
	console.log(contents);
	return ajax(false);		
},
function(err){
	console.log(err);
	return ajax("world");
})
.then(function(contents){
	console.log(contents + ": продолжили, если не было ошибки");
},
function(err){
	console.log(err + ": продолжили, если ошибка появилась");
});
