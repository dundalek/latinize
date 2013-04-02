
# Latinize.js

Simple library to convert accents (diacritics) from strings to latin characters.

Is is a lookup table taken from [http://jsperf.com/latinize](http://jsperf.com/latinize) packaged for node and browser. Visit the link to see more approaches.

## Usage

node.js

```javascript
var latinize = require('latinize');
latinize('naïve áéíóúýčďěňřšťžů'); // => 'naive aeiouycdenrstzu'
```

browser

```html
<script src="../latinize.js"></script>
<script>
    document.write(latinize('naïve áéíóúýčďěňřšťžů'));
</script>
```

