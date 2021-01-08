const americanSlang = require('./american-only.js');
const americanBritish = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishSlang = require('./british-only.js')

class Translator {

  // Better luck this time
  toBritishSlang(string) {
    let translation = string;
    console.log(translation);
    Object.keys(americanSlang).forEach(function (element) {
      let slang = new RegExp("\\b"+element+"\\b","g");
      console.log(slang);
      let formal = americanSlang[element];
      translation = translation.replace(slang, formal);
    });
    console.log(translation);
    Object.keys(americanBritish).forEach(function (element) {
      let american = new RegExp(element,"g");
      let british = americanBritish[element];
      translation = translation.replace(american, british);
    });
    console.log(translation);
    /*Object.keys(britishSlang).forEach(function (element) {
      let formal = new RegExp(element,"g");
      let slang = britishSlang[element];
      translation = translation.replace(formal, slang);
    });*/
    return translation;
  }

  // This function turned out to be crap...
/*  toBritish (string) {
    // ...captures !?. ...
    let endMark = string[string.length-1];
    let translation = [];
    let array = string
      // ...removes end mark...
      .slice(0, string.length-1)
      // ...splits string to an array...
      .split(' ');
    console.log(string, array);
    // ...each word is...
    array.forEach(function (element) {
      // ...checked for American slang...
      if (americanSlang.hasOwnProperty(element)) {
        console.log(americanSlang[element]);
        // ...and changed to formal American english...
        element = americanSlang[element];
      }
      // ...checked for American english...
      if (english.hasOwnProperty(element)) {
        console.log(english[element]);
        // ...and translated to British english...
        element = english[element];
      }
      // ...checked...
      if (britishSlang.hasOwnProperty(element)) {
        console.log(britishSlang[element]);
        // ...and changed to British slang...
        element = britishSlang[element];
      }
      // ...and added to the translation...
      translation.push(element);
    });
    // ...returns translated sentence after adding the end mark
    return translation.join(' ').concat(endMark);
}*/

}

module.exports = Translator;