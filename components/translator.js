const americanSlang = require('./american-only.js');
const americanBritish = require('./american-to-british-spelling.js');
const titles = require("./american-to-british-titles.js")
const britishSlang = require('./british-only.js')

class Translator {

  // Better luck this time
  toBritish(string) {
    let translation = string;
    //console.log(translation);
    Object.keys(americanSlang).forEach(function (element) {
      let slang = new RegExp("\\b"+element+"\\b","ig");
      let formal = americanSlang[element];
      translation = translation.replace(slang, formal);
    });
    //console.log(translation);
    Object.keys(americanBritish).forEach(function (element) {
      let american = new RegExp("\\b"+element+"\\b","ig");
      let british = americanBritish[element];
      translation = translation.replace(american, british);
    });
    //console.log(translation);
    Object.keys(titles).forEach(function (element) {
      let americanTitle = new RegExp(element,"ig");
      let match = translation.match(americanTitle);
      if (match) {
        let britishTitle = match[0].slice(0, match.length-2);
        translation = translation.replace(americanTitle, britishTitle);
      }
    });
    //console.log(translation);
    let americanTime = translation.match(/\d\d:\d\d/ig);
    if (americanTime) {
      let britishTime = americanTime[0].slice(0,2)+'.'+americanTime[0].slice(3);
      translation = translation.replace(/\d\d:\d\d/ig, britishTime);
    }
    return translation;
  }
}

module.exports = Translator;