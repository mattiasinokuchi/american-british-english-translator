const americanSlangToFormal = require('./american-only.js');
const americanToEnglish = require('./american-to-british-spelling.js');
const titles = require("./american-to-british-titles.js")
const englishSlangToFormal = require('./british-only.js')

class Translator {

  toEnglish(americanSlang) {
    let american = translate(americanSlang, americanSlangToFormal);
    let english = translate(american, americanToEnglish);
    english = convertTitles(english);
    english = convertTime(english);
    return english;
  }

  toAmerican(englishSlang) {
    let english = translate(englishSlang, englishSlangToFormal);
    return english;
  }

}

module.exports = Translator;

function translate(from, connection) {
  let translation = from;
  Object.keys(connection).forEach(function (element) {
    let match = new RegExp("\\b"+element+"\\b","ig");
    let newWord = connection[element];
    translation = translation.replace(match, newWord);
  });
  return translation;
}

function convertTitles(string) {
  let conversion = string;
  Object.keys(titles).forEach(function (element) {
    let americanTitle = new RegExp(element,"ig");
    let match = string.match(americanTitle);
    if (match) {
      let britishTitle = match[0].slice(0, match.length-2);
      conversion = conversion.replace(americanTitle, britishTitle);
    }
  });
  return conversion;
}

function convertTime(string) {
  let conversion = string;
  let americanTime = string.match(/\d\d:\d\d/ig);
  if (americanTime) {
    let britishTime = americanTime[0].slice(0,2)+'.'+americanTime[0].slice(3);
    conversion = conversion.replace(/\d\d:\d\d/ig, britishTime);
  }
  return conversion;
}