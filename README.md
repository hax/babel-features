# babel-features

[![Greenkeeper badge](https://badges.greenkeeper.io/hax/babel-features.svg)](https://greenkeeper.io/)
Test babel features, can be used to generate babel options for specific compilation targets


NOTE: The latest version (2.x) is for babel 6.x, for babel 5.x please use [version 1.x](https://github.com/hax/babel-features/tree/1.x)

## Install

```sh
npm install babel-features@latest
```

## Usage

### Node.js
```js
var features = require('babel-features').test()
console.log(features)
// output on Node.js 5.0.0:
// { 'es3-member-expression-literals': true,
//   'es3-property-literals': true,
//   'es5-property-mutators': true,
//   'es2015-arrow-functions': true,
//   'es2015-block-scoping': true,
//   'es2015-classes': true,
//   'es2015-computed-properties': true,
//   'es2015-constants': true,
//   'es2015-destructuring': false,
//   'es2015-for-of': true,
//   'es2015-function-name': false,
//   'es2015-literals': true,
//   'es2015-object-super': true,
//   'es2015-parameters': false,
//   'es2015-shorthand-properties': true,
//   'es2015-spread': false,
//   'es2015-sticky-regex': false,
//   'es2015-template-literals': true,
//   'es2015-typeof-symbol': true,
//   'es2015-unicode-regex': false,
//   'es2015-modules': false,
//   'es2015-generators': false,
//   'es3-function-scope': true }
```

### Use babel preset
See https://github.com/ariporad/babel-preset-features

### Use babel register
```js
var babelOptions = require('babel-features').options()
require('babel-core/register')(babelOptions)
```


## TODO
- Generate `.babelrc`
- Generate `multiform.json` for https://github.com/callumlocke/multiform
- Auto generate babel presets for some targets
