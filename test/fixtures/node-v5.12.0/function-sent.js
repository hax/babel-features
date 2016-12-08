"use strict";

function _patch_function_sent(g) {
	var proto = g.prototype;

	proto.next = function next(value) {
		if (!this._sent) {
			this._sent = true;
			Reflect.apply(Reflect.getPrototypeOf(proto).next, this, [value]);
		}

		return Reflect.apply(Reflect.getPrototypeOf(proto).next, this, [value]);
	};
}

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

_patch_function_sent(g);

function* g() {
	try {
		var _function_sent = yield;

		assert(_function_sent === 1);
		_function_sent = yield;
		assert(_function_sent === 2);
		var x = _function_sent = yield;
		assert(_function_sent === x);
	} catch (e) {
		if (e instanceof _GeneratorPrototype._Return) return e.value;
	}
}

var test = g();
test.next(1);
test.next(2);
test.next(Math.random());