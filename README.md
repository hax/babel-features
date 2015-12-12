# babel-features
Test babel features, can be used to generate babel options for specific compilation targets

## Install

```sh
npm install babel-features
```

## Usage

### CLI
```sh
npm install babel-features -g
babel-features-test
```
###
### Node.js
```js
var features = require('babel-features').test()
console.log(features)
// output on Node.js 4.1.1:
// { 'es3.memberExpressionLiterals': true,
//   'es3.propertyLiterals': true,
//   'es5.properties.mutators': true,
//   'es6.arrowFunctions': true,
//   'es6.blockScoping': true,
//   'es6.classes': true,
//   'es6.constants': true,
//   'es6.destructuring': false,
//   'es6.forOf': true,
//   'es6.modules': false,
//   'es6.parameters': false,
//   'es6.properties.computed': true,
//   'es6.properties.shorthand': true,
//   'es6.spread': false,
//   'es6.templateLiterals': true,
//   'es6.regex.unicode': false,
//   'es7.exponentiationOperator': false,
//   'es7.asyncFunctions': false,
//   'es7.objectRestSpread': false,
//   'es7.functionBind': false,
//   'es6.generators': false,
//   'es3.functionScope': true }
```

### Use babel register
```js
var babelOptions = require('babel-features').options()
require('babel/register')({
	blacklist: babelOptions.blacklist,
	optional: babelOptions.optional
})
```


## TODO
- Generate `.babelrc`
- Generate `multiform.json` for https://github.com/callumlocke/multiform
