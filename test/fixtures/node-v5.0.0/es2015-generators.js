"use strict";

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

function* g() {
	try {
		yield 1;
		yield 2;
		yield 3;
	} catch (e) {
		if (e instanceof _GeneratorPrototype._Return) return e.value;
	}
}
var foo = g();

assert(foo.next().value === 1);
assert(foo.next().value === 2);
assert(foo.next().value === 3);
assert(foo.next().done);

var result = function* () {
	try {
		return 1;
	} catch (e) {
		if (e instanceof _GeneratorPrototype._Return) return e.value;
	}
}().next();

assert(result.done && result.value === 1);