// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (expected !== actual) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
module.exports = assertEqual;
