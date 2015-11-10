'use strict'

var features = [
	// ES3
	'es3-member-expression-literals',
	'es3-property-Literals',

	// ES5
	'es5-property-mutators',

	// ES2015
	'es2015-arrow-functions',
	// es2015-block-scoped-functions
	'es2015-block-scoping',
	'es2015-classes',
	'es2015-computed-properties',
	'es2015-constants',
	'es2015-destructuring',
	'es2015-for-of',
	'es2015-function-name',
	'es2015-literals',
	'es2015-object-super',
	'es2015-parameters',
	'es2015-shorthand-properties',
	'es2015-spread',
	'es2015-sticky-regex',
	'es2015-template-literals',
	'es2015-typeof-symbol',
	'es2015-unicode-regex',

	// Special features
	'es2015-modules',
	'es2015-generators',
	'es3-function-scope',
]

function test() {
	var result = {}
	for (var i = 0; i < features.length; ++i) {
		var f = features[i]
		try {
			result[f] = require('./' + f).test()
		} catch (e) {
			// console.error(f, e)
			result[f] = false
		}
	}
	return result
}


var enumerable = {}.propertyIsEnumerable
var PREFIX = 'transform-'

function options() {
	var plugins = [], optional = []
	var testResult = test()
	for (var f in testResult) {
		if (!enumerable.call(testResult, f)) continue
		var r = !testResult[f]
		switch (f) {
			case 'es2015-block-scoping':
				if (r) plugins.push(PREFIX + 'es2015-block-scoped-functions', PREFIX + f)
				break
			case 'es2015-modules':
				if (r) plugins.push(PREFIX + f + '-' + moduleFormat())
				break
			case 'es2015-generators':
				if (r) plugins.push(PREFIX + 'regenerator')
				else plugins.push(PREFIX + 'async-to-generator')
				break
			case 'es3-function-scope':
				if (r) plugins.push('jscript')
				break
			default:
				if (r) plugins.push(PREFIX + f)
		}
	}
	return {plugins: plugins}
}

function moduleFormat() {
	if (typeof System === 'function' && typeof System.register === 'function') return 'systemjs'
	if (typeof require === 'function' && typeof exports === 'object') return 'commonjs'
	if (typeof define === 'function' && define.amd) return 'amd'
	return 'umd'
}

exports.test = test
exports.options = options
