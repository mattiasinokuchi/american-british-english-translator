const americanOnly = require('./american-only.js');
const differences = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  // Function for something exciting...
  toBritish (string) {
    // ...captures !?. ...
    let endMark = string[string.length-1];
    let translation = [];
    let array = string
      // ...removes end mark...
      .slice(0, string.length-1)
      // ...splits string to an array...
      .split(' ');
    //console.log(string, array);
    array.forEach(function (element) {
      if (differences.hasOwnProperty(element)) {
        //console.log(differences[element]);
        // ...adds translated word to translation...
        translation.push(differences[element]);
      } else {
        // ...adds not translated words to translation...
        translation.push(element);
      }
    });
    // ...returns translated sentence after adding end mark
    return translation.join(' ').concat(endMark);
  }

}

module.exports = Translator;