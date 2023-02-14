const eqArrays = (arr1, arr2) => {
  let statement = true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      statement = false;
    }
  } return statement;
};

const assertArrayEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
const without = (source, itemsToRemove) => {
  // if (eqArrays(source, itemsToRemove)) {
  //   source = []
  //   return source;
  // } else {
  for (let i = source.length - 1; i >= 0; i--) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  console.log(source);
};
//}


without([4, 2], [4, 2]); // => true
without([1, 2, 3], [3, 2, 1]); // => false
without([1, 2, 3, 4], [3, 2, 1]);