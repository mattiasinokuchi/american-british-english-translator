const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  test('Valid fields', function(done) {
    chai.request(server)
    .post('/api/translate')
    .send({
      text: "Mangoes are my favorite fruit.",
      locale: "american-to-british"
    })
    .end(function (err, res) {
      assert.equal(res.status, 200);
      assert.isObject(res.body, true);
      assert.equal(res.body.translation, "Mangoes are my <span class='highlight'>favourite</span> fruit.");
      done();
    });
  });

  test('Invalid locale field', function(done) {
    chai.request(server)
    .post('/api/translate')
    .send({
      text: "Mangoes are my favorite fruit.",
      locale: "invalid"
    })
    .end(function (err, res) {
      assert.equal(res.status, 200);
      assert.isObject(res.body, true);
      assert.deepEqual(res.body, { error: 'Invalid value for locale field' });
      done();
    });
  });

  test('Missing text field', function(done) {
    chai.request(server)
    .post('/api/translate')
    .send({
      text: "",
      locale: "american-to-british"
    })
    .end(function (err, res) {
      assert.equal(res.status, 200);
      assert.isObject(res.body, true);
      assert.deepEqual(res.body, { error: 'No text to translate' });
      done();
    });
  });

  test('Missing locale field', function(done) {
    chai.request(server)
    .post('/api/translate')
    .send({
      text: "Mangoes are my favorite fruit.",
      locale: ""
    })
    .end(function (err, res) {
      assert.equal(res.status, 200);
      assert.isObject(res.body, true);
      assert.deepEqual(res.body, { error: 'Required field(s) missing' });
      done();
    });
  });
});
