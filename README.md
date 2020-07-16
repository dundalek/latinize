[![release](https://img.shields.io/npm/v/latinize.svg)](https://www.npmjs.com/package/latinize)
# Latinize.js

Simple library to convert accents (diacritics) from strings to latin characters.

## Install

```
npm install latinize
```

## Usage

node.js / CommonJS

```javascript
var latinize = require('src/latinize.esm');
latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů'); // => 'ExAmPlE aeiouycdenrstzu'
```

AMD

```javascript
require(['src/latinize.esm'], function(latinize){
  latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů');
});
```

browser

```html
<script src="dist/latinize.min.js"></script>
<script>
    document.write(latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů'));
</script>
```

ESM / MJS / ES6+ / Javascript Module

```javascript
import latinize from 'dist/latinize.mjs';
latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů'); // => 'ExAmPlE aeiouycdenrstzu'
```


You can use the `latinize.characters` object to access the translation table or to change the mapping:

```javascript
latinize.characters['Ω'] = 'O';

// modify the behavior for German umlauts
_.extend(latinize.characters,
  {'Ä': 'Ae', 'Ä': 'Ae', 'Ü': 'Ue', 'ä': 'ae', 'ö': 'oe', 'ü': 'ue'});
```

## Publish new version to npm
update npm-package.json version number then :

```
npm run publish
```
Feel free to update package.json publish script to publish in bower ecosystem.

## Details

Is is a lookup table taken from [http://jsperf.com/latinize](http://jsperf.com/latinize) packaged for node and browser. Visit the link to see more approaches.
