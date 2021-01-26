'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      //console.log(req.body);
      let translation;
      if (req.body.text == undefined || req.body.locale == undefined) {
        res.json({ error: 'Required field(s) missing' });
      } else if (req.body.locale !== 'american-to-british' && req.body.locale !== 'british-to-american') {
        res.json({ "error": "Invalid value for locale field" });
      } else if (req.body.text == "") {
        res.json({ "error": "No text to translate" });
      } else if (req.body.locale == 'american-to-british') {
        translation = translator.toBritish(req.body.text);
      } else if (req.body.locale == 'british-to-american') {
        translation = translator.toAmerican(req.body.text);
      }
      //console.log({ text: req.body.text, translation: translation });
      res.json({
        text: req.body.text,
        translation: translation
      });
    });
};
