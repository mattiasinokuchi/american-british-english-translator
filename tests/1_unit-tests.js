const chai = require('chai');
const assert = chai.assert;
const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {

  test('Mangoes...', function(done) {
    assert.equal(translator.toBritish('Mangoes are my favorite fruit.'), 'Mangoes are my favourite fruit.');
    done();
  });

  test('I ate...', function(done) {
    assert.equal(translator.toBritish('I ate yogurt for breakfast.'), 'I ate yoghurt for breakfast.');
    done();
  });

  test('We had...', function(done) {
    assert.equal(translator.toBritish("We had a party at my friend's condo."), "We had a party at my friend's flat.");
    done();
  });

});
