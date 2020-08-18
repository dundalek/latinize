
# Latinize.js

Simple library to convert accents (diacritics) from strings to latin characters.

## Install

```
npm install latinize
```

or

```
bower install latinize
```

## Usage

node.js

```javascript
var latinize = require('latinize');
latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů'); // => 'ExAmPlE aeiouycdenrstzu'
```

AMD

```javascript
require(['latinize'], function(latinize){
  latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů');
});
```

browser

```html
<script src="../latinize.js"></script>
<script>
    document.write(latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů'));
</script>
```

You can use the `latinize.characters` object to access the translation table or to change the mapping:

```javascript
latinize.characters['Ω'] = 'O';

// modify the behavior for German umlauts
_.extend(latinize.characters,
  {'Ä': 'Ae', 'Ä': 'Ae', 'Ü': 'Ue', 'ä': 'ae', 'ö': 'oe', 'ü': 'ue'});
```

## Details

It is a lookup table taken from [http://jsperf.com/latinize](http://jsperf.com/latinize) packaged for node and browser. Visit the link to see more approaches.
