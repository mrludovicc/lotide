// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (expected !== actual) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Tail function

const tail = function (arr) {
  let result = arr.slice(1);
  return result;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
