const latinize = require('latinize');

test('strips diacritics', () => {
  expect(latinize('ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů Hello World')).toBe('ExAmPlE aeiouycdenrstzu Hello World');
});

test('omega is converted when mapping is customized', () => {
  expect(latinize('Ω')).toBe('Ω');
  latinize.characters['Ω'] = 'O';
  expect(latinize('Ω')).toBe('O');
});

test('pass custom mapping', () => {
  const characters = {
    ...latinize.characters,
    'Ä': 'Ae', 'Ö': 'Oe', 'Ü': 'Ue', 'ä': 'ae', 'ö': 'oe', 'ü': 'ue'
  };
  expect(latinize('ÄÖ')).toBe('AO');
  expect(latinize('ÄÖ', characters)).toBe('AeOe');
});
