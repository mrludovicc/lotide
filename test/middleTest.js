const middle = require('../middle')
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')


describe("#middle", () => {
  it("returns [6, 4] for [4, 2, 5, 4, 4, 6, 7, 7, 4, 5])", () => {
    assert.equal(assertArraysEqual(middle([4, 2, 5, 4, 4, 6, 7, 7, 4, 5]), [6, 4]));
  });

  it("returns [4, 2, 5]) for [2]", () => {
    assert.equal(assertArraysEqual(middle([4, 2, 5]), [2]));
  });
});
// assertArraysEqual(middle([4, 2, 5, 4, 4, 6, 7, 7, 4, 5]), [6, 4]);
// assertArraysEqual(middle([4, 2, 5]), [2]);

