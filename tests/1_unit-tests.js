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

    test('Paracetamol...', function(done) {
      assert.equal(translator.toAmerican("Paracetamol takes up to an hour to work."), "Tylenol takes up to an hour to work.");
      done();
    });

    test('First...', function(done) {
      assert.equal(translator.toAmerican("First, caramelise the onions."), "First, caramelize the onions.");
      done();
    });

    test('I spent...', function(done) {
      assert.equal(translator.toAmerican("I spent the bank holiday at the funfair."), "I spent the public holiday at the carnival.");
      done();
    });

    test('I had...', function(done) {
      assert.equal(translator.toAmerican("I had a bicky then went to the chippy."), "I had a cookie then went to the fish-and-chip shop.");
      done();
    });

    test("I've just...", function(done) {
      assert.equal(translator.toAmerican("I've just got bits and bobs in my bum bag."), "I've just got odds and ends in my fanny pack.");
      done();
    });

    test("The car...", function(done) {
      assert.equal(translator.toAmerican("The car boot sale at Boxted Airfield was called off."), "The swap meet at Boxted Airfield was called off.");
      done();
    });

    test("Have you...", function(done) {
      assert.equal(translator.toAmerican("Have you met Mrs Kalyani?"), "Have you met Mrs. Kalyani?");
      done();
    });

    test("Prof Joyner...", function(done) {
      assert.equal(translator.toAmerican("Prof Joyner of King's College, London."), "Prof. Joyner of King's College, London.");
      done();
    });

    test("Tea time...", function(done) {
      assert.equal(translator.toAmerican("Tea time is usually around 4 or 4.30."), "Tea time is usually around 4 or 4:30.");
      done();
    });

  });

});