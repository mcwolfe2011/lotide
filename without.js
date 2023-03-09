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

/*Example of without:
_.without([2, 1, 2, 3], 1, 2);
// => [3]
*/


const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let matchItems = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        matchItems = true;
      }
    }
    if (!matchItems) {
      result.push(source[i]);
    }
  }

  return result;

};

let resultOne = without([1, 2, 3], [1]); // => [2, 3]
console.log(resultOne);
let resultTwo = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
console.log(resultTwo);

const words = ["hello", "world", "lighthouse"];

let thirdResult = without(words, ["lighthouse"]); // no need to capture return value for this test case
console.log(thirdResult);
// Make sure the original array was not altered by the without function
let fourthResult = assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(fourthResult);



















