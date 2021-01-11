const chai = require('chai');
const assert = chai.assert;
const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {

  suite('British English', () => {

    test('Mangoes...', function(done) {
      assert.equal(translator.toEnglish('Mangoes are my favorite fruit.'), 'Mangoes are my favourite fruit.');
      done();
    });

    test('I ate...', function(done) {
      assert.equal(translator.toEnglish('I ate yogurt for breakfast.'), 'I ate yoghurt for breakfast.');
      done();
    });

    test('We had...', function(done) {
      assert.equal(translator.toEnglish("We had a party at my friend's condo."), "We had a party at my friend's flat.");
      done();
    });

    test('Can you...', function(done) {
      assert.equal(translator.toEnglish("Can you toss this in the trashcan for me?"), "Can you toss this in the bin for me?");
      done();
    });

    test('The parking...', function(done) {
      assert.equal(translator.toEnglish("The parking lot was full."), "The car park was full.");
      done();
    });

    test('Like a...', function(done) {
      assert.equal(translator.toEnglish("Like a high tech Rube Goldberg machine."), "Like a high tech Heath Robinson device.");
      done();
    });

    test('To play...', function(done) {
      assert.equal(translator.toEnglish("To play hooky means to skip class or work."), "To bunk off means to skip class or work.");
      done();
    });

    test('No Mr...', function(done) {
      assert.equal(translator.toEnglish("No Mr. Bond, I expect you to die."), "No Mr Bond, I expect you to die.");
      done();
    });

    test('Dr Grosh...', function(done) {
      assert.equal(translator.toEnglish("Dr. Grosh will see you now."), "Dr Grosh will see you now.");
      done();
    });  

    test('Lunch is...', function(done) {
      assert.equal(translator.toEnglish("Lunch is at 12:15 today."), "Lunch is at 12.15 today.");
      done();
    });

  });

  suite('American English', () => {

    test('We watched...', function(done) {
      assert.equal(translator.toAmerican("We watched the footie match for a while."), "We watched the soccer match for a while.");
      done();
    });

  });

});