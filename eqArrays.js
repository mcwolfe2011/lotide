const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("Arrays are not equal");
  } else {
    let equal = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        equal = false;
        break;
      }
    }
    if (equal) {
      console.log("Arrays are equal");
    } else {
      console.log("Arrays are not equal");
    }
  }
};



//This checking works correctly:
eqArrays([1, 2, 3], [1, 2, 3]), true; // => (e.g. #1) should PASS

eqArrays([1, 2, 3], [1, 2, 3]) // => true (e.g. #2)

eqArrays([1, 2, 3], [3, 2, 1]) // => false (e.g. #3)

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true (e.g. #4)

eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false (e.g. #5)

console.log();
//This kind of checking don't quite work correctly:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => (e.g. #1) should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true (e.g. #2)

assertEqual(eqArrays([1, 2, 3], [3, 2, 1])) // => false (e.g. #3)

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true (e.g. #4)

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false (e.g. #5)




// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let value = 0; value < array1.length; value += 1) {
//     if ((Array.isArray(array1[value]) || Array.isArray(array2[value])) && eqArrays(array1[value], array2[value]) === false) {
//       return false;
//     } else if (Array.isArray(array1[value]) || Array.isArray(array2[value])) {
//       eqArrays(array1[value], array2[value]);
//     } else if (array1[value] !== array2[value]) {
//       return false;
//     }
//   }
//   return true;
// };