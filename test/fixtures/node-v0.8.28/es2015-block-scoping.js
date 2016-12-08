"use strict";

var foo = 0,
    bar = 1;
foo += bar;
{
	var _bar = 2;
	foo += _bar;
	for (var _bar2 = 3; _bar2 < 5; foo += _bar2, ++_bar2) {
		var _bar3 = 10;
		foo += _bar3;
	}
}

assert(foo === 30);

switch (0) {
	default:
		var _bar4 = 3;
		foo += _bar4;
}

assert(foo === 33);

var f = [];

var _loop = function _loop(i) {
	f.push(function () {
		return i;
	});
};

for (var i = 0; i < 3; ++i) {
	_loop(i);
}

assert(f.length === 3 && f[0]() === 0 && f[1]() === 1 && f[2]() === 2);