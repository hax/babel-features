'use strict'

var fs = require('fs')
var yaml = require('js-yaml')

module.exports =
	yaml.safeLoad(fs.readFileSync(__dirname + '/../src/features.yaml', 'utf-8'))
	.map(function (f) {
		return {
			feature: f,
			code: fs.readFileSync(__dirname + '/../src/features/' + f + '.js', 'utf-8')
		}
	})
