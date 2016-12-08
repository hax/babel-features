'use strict';

var _GeneratorPrototype = Object.getPrototypeOf(function* () {}.prototype);

if (!_GeneratorPrototype.return) {
	_GeneratorPrototype._Return = class Return {
		constructor(value) {
			this.value = value;
		}

	};

	_GeneratorPrototype.return = function (value) {
		var r = new this._Return(value);

		try {
			return this.throw(r);
		} catch (e) {
			return {
				done: true,
				value: value
			};
		}
	};
}

var closed;
function* g() {
	try {
		try {
			closed = false;
			while (true) {
				yield;
			}
		} finally {
			closed = true;
		}
	} catch (e) {
		if (e instanceof _GeneratorPrototype._Return) return e.value;
	}
}
var foo = g();
foo.next();
var result = foo.return('ok');

assert(result.done && result.value === 'ok' && closed);

result = foo.next();

assert(result.done && result.value === undefined);

result = function* () {
	try {} catch (e) {
		if (e instanceof _GeneratorPrototype._Return) return e.value;
	}
}().return('ok2');

assert(result.done && result.value === 'ok2');