const americanOnly = require('./american-only.js');
const differences = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  // Function for something exciting...
  toBritish (string) {
    let endMark = string[string.length-1];
    let translation = [];
    let array = string
      .slice(0, string.length-1)
      .split(' ');
    console.log(string, array);
    array.forEach(function (element) {
      if (differences.hasOwnProperty(element)) {
        console.log(differences[element]);
        translation.push(differences[element]);
      } else {
        translation.push(element);
      }
    });
    return translation.join(' ').concat(endMark);
  }

}

module.exports = Translator;