const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//Test Code:
eqArrays();
assertArraysEqual(([1, 2, 3], [1, 2, 3]));
assertArraysEqual(([2, 3, 1], [1, 2, 3]));