'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let translation;
      if (req.body.locale == "") {
        res.json({ error: 'Required field(s) missing' });
      } else if (req.body.locale !== 'american-to-british' && req.body.locale !== 'british-to-american') {
        res.json({ "error": "Invalid value for locale field" });
      } else if (req.body.text == "") {
        res.json({ "error": "No text to translate" });
      } else if (req.body.locale == 'american-to-british') {
        console.log("to English");
        translation = translator.toEnglish(req.body.text);
      } else if (req.body.locale == 'british-to-american') {
        console.log("to American");
        translation = translator.toAmerican(req.body.text);
      }
      res.json({
        text: req.body.text,
        translation: translation
      });
    });
};
