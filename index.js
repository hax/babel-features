'use strict'

var fs = require('fs')

var features = [
	// ES3
	'es3-member-expression-literals',
	'es3-property-literals',

	// ES5
	'es5-property-mutators',

	// ES2015
	'es2015-arrow-functions',
	'es2015-block-scoped-functions',
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

	// Stage 3+
	'exponentiation-operator',
	'syntax-trailing-function-commas',

	// Special features
	'es3-function-scope',
	'es2015-modules',
	'es2015-generators',
	'es2015-generator-return',
	'async-functions',
]

function test() {
	var result = {}
	for (var i = 0; i < features.length; ++i) {
		var f = features[i]
		var code = fs.readFileSync(__dirname + '/' + f + '.js', 'utf-8')
		var assert = function (test) {
			if (result[f] === false) return
			result[f] = !!test
		}
		try {
			new Function('assert', code)(assert)
		} catch (e) {
			assert(false)
		}
		if (!result[f]) {
			try {
				f += ':strict'
				new Function('assert', '"use strict";' + code)(assert)
			} catch (e) {
			}
		}
		if (result[f]) {

		}
	}
	return result
}


var enumerable = {}.propertyIsEnumerable
var PREFIX = 'transform-'

function options() {
	var plugins = [], optional = []
	var testResult = test()
	var strict = false
	for (var f in testResult) {
		if (!enumerable.call(testResult, f)) continue
		if (testResult[f]) continue
		if (testResult[f + ':strict']) {
			strict = true
			continue
		}
		switch (f) {
		        case 'es2015-constants':
				if (r) plugins.push('check-' + f)
				break
		        case 'es2015-block-scoping':
				if (r) plugins.push(PREFIX + 'es2015-block-scoped-functions', PREFIX + f)
				break
			case 'es2015-modules':
				plugins.push(PREFIX + f + '-' + moduleFormat())
				break
			case 'es2015-generators':
				plugins.push(PREFIX + 'regenerator')
				break
			case 'es2015-generator-return':
				if (testResult['es2015-generators']) plugins.push(PREFIX + f)
				break
			case 'es3-function-scope':
				plugins.push('jscript')
				break
			default:
				if (f.slice(0, 7) === 'syntax-') plugins.push(f)
				else plugins.push(PREFIX + f)
		}
	}
	if (strict) plugins.push(PREFIX + 'strict')
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
