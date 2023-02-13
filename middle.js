const eqArrays = (arr1, arr2) => {
  let statement = true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      statement = false
    }
  } return statement
}

const assertArrayEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
}


const middle = function (array) {
  let length = (array.length / 2)
  if (array.length === 1 || array.length === 2) {
    array = []
    return array
  }
  if (array.length % 2 === 0) {
    return [array[length], array[length - 1]];
  }
  if (array.length % 2 !== 0) {
    length = Math.floor(length)
    return [array[length]];
  }
}

assertArrayEqual(middle([4, 2, 5, 4, 4, 6, 7, 7, 4, 5]), [6, 4]);
assertArrayEqual(middle([4, 2, 5]), [2]);

