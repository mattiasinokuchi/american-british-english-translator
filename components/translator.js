const americanSlangToFormal = require('./american-only.js');
const americanToEnglish = require('./american-to-british-spelling.js');
const titles = require("./american-to-british-titles.js")
const englishSlangToFormal = require('./british-only.js')

class Translator {

  toEnglish(americanSlang) {
    let american = translate(americanSlang, americanSlangToFormal);
    let english = translate(american, americanToEnglish);
    english = translate(english, titles);
    english = convertTime(english);
    return english;
  }

  toAmerican(englishSlang) {
    let english = translate(englishSlang, englishSlangToFormal);
    let american = translateBackwards(english, americanToEnglish);
    american = translateBackwards(american, titles);
    return american;
  }

}

module.exports = Translator;

function translate(from, connection) {
  let translation = from;
  //console.log(from);
  Object.keys(connection).forEach(function (element) {
    // finds element without letters or hyphens on either side
    let match = new RegExp("(?<!\\w|-)"+element+"(?!\\w|-)", "ig");
    if (match.test(translation)) {
      let newWord = connection[element];
      translation = translation.replace(match, newWord);
      //console.log(element, "->", newWord);
      //console.log(translation);
    }
  });
  return translation;
}

function translateBackwards(from, connection) {
  let translation = from;
  Object.values(connection).forEach(function (element) {
    // finds element without letters or hyphens on either side
    let match = new RegExp("(?<!\\w|-)"+element+"(?!\\w|-)", "ig");
    if (match.test(translation)) {
      let newWord = Object.keys(connection).find(key => connection[key] === element);
      translation = translation.replace(match, newWord);
    }
  });
  return translation;
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