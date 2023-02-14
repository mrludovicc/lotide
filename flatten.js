const eqArrays = (result, expected) => {
  let statement = true;
  if (result.length !== expected.length) return false;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== expected[i]) {
      statement = false;
    }
  } return statement;
};

const assertArrayEqual = (result, expected) => {
  if (eqArrays(result, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${result} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${result} !== ${expected}`);
  }
};
const flatten = (arr) => {
  let result = [];
  let expected = [1, 2, 3, 4, 5, 6];
  for (let element of arr) {
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      result.push(element);
    }
  }
  return result;
};
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
