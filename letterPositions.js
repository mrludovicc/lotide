const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let item of arr1) {
    if (arr1[item] !== arr2[item]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  } else if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  }
};

let letterPosition = (str) => {
  let string = str.toLowerCase().split(' ').join('');
  let letters = {};
  for (let i = 0; i < string.length; i++) {
    if (!letters[string[i]]) {
      letters[string[i]] = [i]
    } else {
      letters[string[i]].push(i);
    }
  }
  return letters;

};
assertArraysEqual(letterPosition('ARIGATOOOO AMIGOS').o, [6, 7, 8, 9, 14]);