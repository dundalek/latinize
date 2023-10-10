
# Latinize.js

Simple library to convert accents (diacritics) from strings to latin characters.

## Install

```
npm install latinize
```

## Usage

ES module

```javascript
import latinize from 'latinize';
latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů'); // => 'ExAmPlE aeiouycdenrstzu'
```

node.js CommonJS

```javascript
var latinize = require('latinize');
latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů');
```

You can use the `latinize.characters` object to access the translation table and pass custom mapping as a second argument:

```javascript
// modify the behavior for German umlauts
const characters = {
  ...latinize.characters,
  'Ä': 'Ae', 'Ö': 'Oe', 'Ü': 'Ue', 'ä': 'ae', 'ö': 'oe', 'ü': 'ue'
};
latinize('ÄÖ', characters) // => "AeOe"
```

## Details

Is is a lookup table taken from [http://jsperf.com/latinize](http://jsperf.com/latinize) packaged for node and browser. Visit the link to see more approaches.
