const chai = require('chai');
const assert = chai.assert;
const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {

  test('Mangoes...', function(done) {
    assert.equal(translator.toBritishSlang('Mangoes are my favorite fruit.'), 'Mangoes are my favourite fruit.');
    done();
  });

  test('I ate...', function(done) {
    assert.equal(translator.toBritishSlang('I ate yogurt for breakfast.'), 'I ate yoghurt for breakfast.');
    done();
  });

  test('We had...', function(done) {
    assert.equal(translator.toBritishSlang("We had a party at my friend's condo."), "We had a party at my friend's flat.");
    done();
  });

  test('Can you...', function(done) {
    assert.equal(translator.toBritishSlang("Can you toss this in the trashcan for me?"), "Can you toss this in the bin for me?");
    done();
  });

  test('The parking...', function(done) {
    assert.equal(translator.toBritishSlang("The parking lot was full."), "The car park was full.");
    done();
  });

});
