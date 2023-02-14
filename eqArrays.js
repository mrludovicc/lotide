const eqArrays = (arr1, arr2) => {
  let statement = true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      statement = false;
    }
  } return statement;
};



module.exports = eqArrays;