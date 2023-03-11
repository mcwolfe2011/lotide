const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};

eqArrays(([1, 2, 3], [1, 2, 3]), true);


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);


//Actual function
const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      array.splice(i);
      return array;
    }
  }
};


//test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log("This is results1: " + results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log("This is results2: " + results2);
let results3 = assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
console.log("This is results3: " + results3);












