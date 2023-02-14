const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
// TEST CODE

describe('#assertEqual', () => {
  it(' should return false when comparing "Lighthouse Labs" to "Bootcamp"', () => {
    assert.equal(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
});
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);