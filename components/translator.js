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
    american = convertTime(american);
    return american;
  }

}

module.exports = Translator;

function translate(string, fromTo) {
  let translation = string;
  Object.keys(fromTo).forEach(function (element) {
    // finds element without letters or hyphens on either side
    let match = new RegExp("(?<!\\w|-)"+element+"(?!\\w|-)", "ig");
    if (match.test(translation)) {
      let newWord = fromTo[element];
      translation = translation.replace(match, newWord);
      //console.log(element, "->", newWord);
      //console.log(translation);
    }
  });
  return translation;
}

function translateBackwards(string, fromTo) {
  let translation = string;
  Object.values(fromTo).forEach(function (element) {
    // finds element without letters or hyphens on either side
    let matches = new RegExp("(?<!\\w|-)"+element+"(?!\\w|-)", "ig");
    if (matches.test(translation)) {
      let newWord = Object.keys(fromTo).find(key => fromTo[key] === element);
      translation = translation.replace(matches, newWord);
    }
  });
  return translation;
}

function convertTime(string) {
  let conversion = string;
  let americanTimeMatches = /(?<=\d):(?=\d\d)/ig;
  let englishTimeMatches = /(?<=\d)\.(?=\d\d)/ig;
  if (americanTimeMatches.test(string)) {
    conversion = string.replace(americanTimeMatches, '.');
  } else if (englishTimeMatches.test(string)) {
    conversion = string.replace(englishTimeMatches, ':');
  }
  return conversion;
}