// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (expected !== actual) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
};

let countLetters = (str) => {
  let string = str.toLowerCase();
  let letters = {};
  for (let letter of string) {
    if (!letters[letter]) {
      letters[letter] = 1;
    } else {
      letters[letter]++;
    }
  } console.log(letters)
};
countLetters('Helloooo VIETNAM');
assertEqual(countLetters("hello"), { 'h': 1, 'e': 1, 'l': 2, 'o': 1 });