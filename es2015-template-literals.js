'use strict'

exports.test = function () {
	var foo = "foo"
	var bar = `${foo}bar`
	return bar === "foobar"
}
