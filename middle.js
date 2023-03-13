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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

const middle = function(array) {
  let midItems = [];
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  let middleIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    midItems.push(array[middleIndex - 1]);
    midItems.push(array[middleIndex]);
  } else {
    midItems.push(array[middleIndex]);
  }
  return midItems;
};



module.exports = middle;