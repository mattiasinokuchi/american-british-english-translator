'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let translation;
      if (req.body.locale == 'american-to-british') {
        translation = translator.toEnglish(req.body.text);
      } else {
        translation = translator.toAmerican(req.body.text);
      }
      res.json({
        text: req.body.text,
        translation: translation
      });
    });
};
