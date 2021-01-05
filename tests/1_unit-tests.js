const chai = require('chai');
const assert = chai.assert;
const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {

  test('Mangoes...', function(done) {
      assert.equal(translator.toBritish('Mangoes are my favorite fruit.'), 'Mangoes are my favourite fruit.');
      done();
    });

});
