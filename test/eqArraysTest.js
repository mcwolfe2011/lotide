//test/eqArraysTest.js
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test Code:
assertEqual(eqArrays(([1, 2, 3], [1, 2, 3]), true)); // => (e.g. #1) should PASS
eqArrays([1, 2, 3], [1, 2, 3]); // => true (e.g. #2)
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true (e.g. #4)

