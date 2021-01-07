const americanSlang = require('./american-only.js');
const english = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishSlang = require('./british-only.js')

class Translator {

  // Better luck this time
  toBritishSlang(string) {
    let translation = string;
    let replace = "Mangoes";
    let re = new RegExp(replace,"g");
    return translation.replace(re, "Apples");
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