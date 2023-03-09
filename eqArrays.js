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
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};


console.log("Testing results below:");
//This checking works correctly:
let test = assertEqual(eqArrays(([1, 2, 3], [1, 2, 3]), true)); // => (e.g. #1) should PASS
console.log(`${test}: should say Passed`);


let result = eqArrays([1, 2, 3], [1, 2, 3]); // => true (e.g. #2)
console.log(`${result}: should say true`);

result = eqArrays([1, 2, 3], [3, 2, 1]); // => false (e.g. #3)
console.log(`${result}: should say false`);

result = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true (e.g. #4)
console.log(`${result}: should say true`);

result = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false (e.g. #5)
console.log(`${result}: should say false`);

//console.log();
//This kind of checking don't quite work correctly:
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => (e.g. #1) should PASS

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true (e.g. #2)

// assertEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false (e.g. #3)

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true (e.g. #4)

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false (e.g. #5)




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


/*
Working on this yet:

const eqArrays = function(array1, array2) {
  let resultArray = [];
  
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        resultArray.push(array1[i]);
      }
    }


*/