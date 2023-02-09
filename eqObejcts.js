// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
// const assertEqual = function (actual, expected) {
//   if (expected !== actual) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//   }
// };
// const eqObjects = function (object1, object2) {
//   let counter = []
//   //console.log(Object.keys(object1).length)
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   } else {
//     for (let key in object1) {
//       if (object1[key] === object2[key]) {
//         counter.push(true)
//       } else {
//         return false
//       }
//     }
//   } if (counter.length === Object.keys(object1).length) {
//     return true;
//   }

// };

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { color: "red", size: "medium" };
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true)

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject, longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);



// ---- Working fully
const eqArrays = (arr1, arr2) => {
  let statement = true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      statement = false
    }
  } return statement
}
const assertEqual = function (actual, expected) {
  if (expected !== actual) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
};
const eqObjects = function (object1, object2) {
  let counter = []
  //console.log(Object.keys(object1).length)
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key])) return true;
      }
      else if (object1[key] === object2[key]) {
        counter.push(true)
      } else {
        return false
      }
    }
  } if (counter.length === Object.keys(object1).length) {
    return true;
  }

};


//Test Cases
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true
const shirtObject = { color: "blue", size: "medium" };
const anotherShirtObject = { color: "red", size: "medium" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), false)
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);