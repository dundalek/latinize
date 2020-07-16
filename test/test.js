var assert = require("assert");

describe('latinize', function() {
	var latinize;
  	it('should be successfully initialized', function() {
    	latinize = require('../dist/latinize.js');
  	});

   	it('should pass through simple word', function() {
    	assert.equal(latinize('Test'), 'Test');
   	});

   	it('should pass through some brazilian portuguese characters', function() {
    	assert.equal(latinize('Óçãâé'), 'Ocaae');
   	});
});
