const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
assertArraysEqual();
middle();

middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2]); // => []
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// Assertion Passed