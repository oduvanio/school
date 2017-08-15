var sym = Symbol( "необязательное описание" );
console.log(typeof sym);
console.log( sym.toString());

const EVT_LOGIN = Symbol( "event.login" );
console.log(EVT_LOGIN);

// шаблон-одиночка
const INSTANCE = Symbol( "instance" );
function HappyFace() {
	if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];
	function smile() {}
	return HappyFace[INSTANCE] = {
		smile: smile
	};
}

var me = HappyFace(),
you = HappyFace();
console.log(me);
console.log(me === you);

// проверка по описанию символа в глобальном реестре, если есть возврат его если нет, то создание
const EVT_LOG = Symbol.for( "event.login" );
console.log(EVT_LOG);
const EVT_LOG2 = Symbol.for( "event.login2" );
console.log(EVT_LOG2);

function extractValues(str) {
	var key = Symbol.for( "extractValues.parse" ),
	re = extractValues[key] || /[^=𝄞]+?=([^𝄞]+?)(?=𝄞|$)/g,
	values = [], match;
	while (match = re.exec( str )) {
		values.push( match[1] );
	}
	return values;
}

// Символ сохраненный как свойство объекта не отображается при перечислении
var o = {
	foo: 42,
	[ Symbol( "bar" ) ]: "hello world",
	baz: true
};
console.log(Object.getOwnPropertyNames( o )); // [ "foo", "baz" ]

// Способ получить символьное свойство объекта
console.log(Object.getOwnPropertySymbols( o )); // [Symbol(bar)]
