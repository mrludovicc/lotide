const eqArrays = (arr1, arr2) => {
  let statement = true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      statement = false
    }
  } return statement
}
const assertArrayEqual = (array, callback) => {
  if (eqArrays(array, callback)) {
    console.log(`✅✅✅ Assertion Passed: ${array} === ${callback}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array} !== ${callback}`)
  }
}
const words = ["ground", "control", "to", "major", "tom"];

// const results1 = words.map(word => word[0]);
// console.log(results1);
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
assertArrayEqual((results1), ['g', 'c', 't', 'm', 't']);

