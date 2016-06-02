void function(global) {
	'use strict'

	switch (moduleFormat()) {
		case 'systemjs':
			System.register([], function (_export) {
				return {
					execute: function () {
						_export("test", test)
						_export("options", options)
					}
				}
			})
			break
		case 'amd':
			define({test: test, options: options})
			break
		case 'commonjs':
			exports.test = test
			exports.options = options
			break
		default:
			global.BabelFeatures = {test: test, options: options}
	}

	/* BODY */

}(this)
