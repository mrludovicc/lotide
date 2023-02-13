const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
assertArraysEqual(middle([4, 2, 5, 4, 4, 6, 7, 7, 4, 5]), [6, 4]);
assertArraysEqual(middle([4, 2, 5]), [2]);

