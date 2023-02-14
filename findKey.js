const assertEqual = function(obj, callback) {
  if (callback !== obj) {
    console.log(`🛑🛑🛑 Assertion Failed: ${obj} !== ${callback}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${obj} === ${callback}`);
  }
};

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3), "Akaleri");
