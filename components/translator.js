const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  // Function for something exciting...
  toBritish (string) {
    let translation = '';
    let array = string.split(' ');
    console.log(array);

    return translation;
  }

}

module.exports = Translator;