'use strict';

var closed;
function* g() {
	try {
		closed = false;
		while (true) yield;
	} finally {
		closed = true;
	}
}
var foo = g();
foo.next();
var result = foo.return('ok');

assert(result.done && result.value === 'ok' && closed);

result = foo.next();

assert(result.done && result.value === undefined);

result = function* () {}().return('ok2');

assert(result.done && result.value === 'ok2');