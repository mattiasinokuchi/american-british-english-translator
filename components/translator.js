const americanSlang = require('./american-only.js');
const americanBritish = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishSlang = require('./british-only.js')

class Translator {

  // Better luck this time
  toBritish(string) {
    let translation = string;
    console.log(translation);
    Object.keys(americanSlang).forEach(function (element) {
      let slang = new RegExp("\\b"+element+"\\b","ig");
      let formal = americanSlang[element];
      translation = translation.replace(slang, formal);
    });
    console.log(translation);
    Object.keys(americanBritish).forEach(function (element) {
      let american = new RegExp("\\b"+element+"\\b","ig");
      let british = americanBritish[element];
      translation = translation.replace(american, british);
    });
    //console.log(translation);
    return translation;
  }


}

module.exports = Translator;