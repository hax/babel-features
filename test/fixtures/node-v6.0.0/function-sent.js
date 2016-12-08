"use strict";

function _patch_function_sent(g) {
	const proto = g.prototype;

	proto.next = function next(value) {
		if (!this._sent) {
			this._sent = true;
			Reflect.apply(Reflect.getPrototypeOf(proto).next, this, [value]);
		}

		return Reflect.apply(Reflect.getPrototypeOf(proto).next, this, [value]);
	};
}

_patch_function_sent(g);

function* g() {
	let _function_sent = yield;

	assert(_function_sent === 1);
	_function_sent = yield;
	assert(_function_sent === 2);
	var x = _function_sent = yield;
	assert(_function_sent === x);
}

var test = g();
test.next(1);
test.next(2);
test.next(Math.random());