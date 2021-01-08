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

  test('Can you...', function(done) {
    assert.equal(translator.toBritish("Can you toss this in the trashcan for me?"), "Can you toss this in the bin for me?");
    done();
  });

  test('The parking...', function(done) {
    assert.equal(translator.toBritish("The parking lot was full."), "The car park was full.");
    done();
  });

  test('Like a...', function(done) {
    assert.equal(translator.toBritish("Like a high tech Rube Goldberg machine."), "Like a high tech Heath Robinson device.");
    done();
  });

  test('To play...', function(done) {
    assert.equal(translator.toBritish("To play hooky means to skip class or work."), "To bunk off means to skip class or work.");
    done();
  });

  test('No Mr...', function(done) {
    assert.equal(translator.toBritish("No Mr. Bond, I expect you to die."), "No Mr Bond, I expect you to die.");
    done();
  });

  test('Dr Grosh...', function(done) {
    assert.equal(translator.toBritish("Dr. Grosh will see you now."), "Dr Grosh will see you now.");
    done();
  });  

});
