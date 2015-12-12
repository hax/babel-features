var clc = require('cli-color');
var features = require('../index').test();
console.log("Your node version: " + process.version);
Object.keys(features).forEach(function(key) {
	if (features[key]) {
		console.log(clc.green(key));
	} else {
		console.log(clc.red(key));
	}
});