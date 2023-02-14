const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it(' return [1, 2, [3, 4], 5, [6]] to equal [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  });

  it(' return [[1, 2], [3, 4, [5, [6], 7], 25], 19, 23, 12] to equal [1, 2, 3, 4, 5, 6, 7, 25, 19, 23, 12]', () => {
    assert.deepEqual(flatten([[1, 2], [3, 4, [5, [6], 7], 25], 19, 23, 12]), [1, 2, 3, 4, 5, 6, 7, 25, 19, 23, 12])
  });
});
