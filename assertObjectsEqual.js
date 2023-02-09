const eqArrays = require('./eqArrays')
const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) return false;
      }
      else if (object1[key] !== object2[key]) {
        return false
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (obj1, obj2) {
  // Implement me!
  //const inspect = require('util').inspect; // what is this DOING?
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${obj1} === ${obj2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${obj1} !== ${obj2}`)
  }

};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium", fabric: "cotton" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], fabric: "cotton" };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject)