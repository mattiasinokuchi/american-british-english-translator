const americanSlangToFormal = require('./american-only.js');
const americanToBritish = require('./american-to-british-spelling.js');
const americanTitlesToBritishTitles = require("./american-to-british-titles.js")
const britishSlangToFormal = require('./british-only.js')

class Translator {

  toBritish(input) {
    let american = translate(input, americanSlangToFormal);
    let english = translate(american, americanToBritish);
    english = translate(english, americanTitlesToBritishTitles);
    english = convertTime(english);
    if (input == english) return "Everything looks good to me!";
    else return english;
  }

  toAmerican(input) {
    let english = translate(input, britishSlangToFormal);
    let american = translateBackwards(english, americanToBritish);
    american = translateBackwards(american, americanTitlesToBritishTitles);
    american = convertTime(american);
    if (input == american) return "Everything looks good to me!" 
    else return american;
  }
  
}

module.exports = Translator;

function translate(string, fromTo) {
  let translation = string;
  Object.keys(fromTo).forEach(function (element) {
    // finds element without letters or hyphens on either side
    let match = new RegExp("(?<!\\w|-)"+element+"(?!\\w|-)", "ig");
    if (match.test(translation)) {
      let newHighlightedWord = '<span class="highlight">' + fromTo[element] + "</span>";
      translation = translation.replace(match, newHighlightedWord);
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
      let newHighlightedWord = '<span class="highlight">' + newWord + "</span>"; 
      translation = translation.replace(matches, newHighlightedWord);
    }
  });
  return translation;
}

function convertTime(string) {
  let conversion = string;
  // capture groups of digits before and after :
  let americanTimeMatches = /([0-2]?[1-9]):([0-5]\d)/gm;
  let englishTimeMatches = /([0-2]?[1-9])\.([0-5]\d)/gm;
  if (americanTimeMatches.test(string)) {
    let newHighlightedTime = '<span class="highlight">'+'$1'+'.'+'$2'+"</span>";
    conversion = string.replace(americanTimeMatches, newHighlightedTime);
  } else if (englishTimeMatches.test(string)) {
    let newHighlightedTime = '<span class="highlight">'+'$1'+':'+'$2'+"</span>";
    conversion = string.replace(englishTimeMatches, newHighlightedTime);
  }
  return conversion;
}