const flatten = (arr) => {
  let result = [];
  //let expected = [1, 2, 3, 4, 5, 6];
  for (let element of arr) {
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      result.push(element);
    }
  }
  return result;
};
module.exports = flatten;

