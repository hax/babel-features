'use strict'

var features = [

	'es3.memberExpressionLiterals',
	'es3.propertyLiterals',

	'es5.properties.mutators',

	'es6.arrowFunctions',
	'es6.blockScoping',
	'es6.classes',
	'es6.constants',
	'es6.destructuring',
	'es6.forOf',
	'es6.modules',
	'es6.parameters',
	'es6.properties.computed',
	'es6.properties.shorthand',
	'es6.spread',
	// 'es6.tailCall'
	'es6.templateLiterals',
	'es6.regex.unicode',
	// 'es6.regex.sticky'

	// Stage 2
	'es7.exponentiationOperator',
	'es7.asyncFunctions',
	'es7.objectRestSpread',

	// Stage 1
	'es7.decorators',
	// 'es7.exportExtensions'
	// 'es7.trailingFunctionCommas'

	// Stage 0
	// 'es7.comprehensions'
	// 'es7.classProperties'
	// 'es7.doExpressions'
	'es7.functionBind',

	// Other

	// flow

	// react

	// reactCompat

	'es6.generators',
	// regenerator

	// strict

	'es3.functionScope',
	// jscript
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

function options() {
	var blacklist = [], optional = []
	var testResult = test()
	for (var f in testResult) {
		if (!enumerable.call(testResult, f)) continue
		if (testResult[f]) {
			switch (f) {
				case 'pass':
					break
				case 'es6.generators':
					blacklist.push('regenerator')
					if (!testResult['es7.asyncFunctions']) optional.push('asyncToGenerator')
					break
				case 'es3.functionScope':
					blacklist.push('jscript')
					break
				default:
					blacklist.push(f)
			}
		}
	}
	return {blacklist: blacklist, optional: optional}
}

exports.test = test
exports.options = options
