const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')
const assert = require('chai').assert
describe("#eqArrays", () => {
  it('returns true for [1, 2, 3], [1, 2, 3]', () => {
    assert.deepEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });

  it('returns false for [1, 2, 3], [3, 2, 1]', () => {
    assert.deepEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
  });

  it('returns true for [5, 6, 9, 11, 12, 25], [5, 6, 9, 11, 12, 25]', () => {
    assert.deepEqual(assertEqual(eqArrays([5, 6, 9, 11, 12, 25], [5, 6, 9, 11, 12, 25]), true));
  });

});


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS