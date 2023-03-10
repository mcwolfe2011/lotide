// Review

// => eqArrays()
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

eqArrays([1,2.3], [1,2,3]);



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const differentShirtObject = {size: "medium", color: "red", style: {1: "plaid", 2: "classic", 3: "slim fit"}, trend: "new"};


// => eqObjects()
const eqObjects = function(object1, object2) {
  console.log("object1", object1);
  let output = true;
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) output = output && false;
  else for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      output = output && (eqArrays(object1[key], object2[key]));
    } else if (typeof (object1[key]) === "object" || typeof (object2[key]) === "object") {
      output = output && eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) output = output && false;
  }
  return output;
};

eqObjects(shirtObject, anotherShirtObject);


console.log("This is with eqArrays test: " + eqArrays(shirtObject, anotherShirtObject)); // => true

console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
console.log(eqObjects(shirtObject, differentShirtObject)); // => false



// => assertObjectsEqual()
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (!eqObjects(actual, expected)) return (console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
};
assertObjectsEqual(shirtObject, differentShirtObject);
assertObjectsEqual(shirtObject, anotherShirtObject); // => Assertion Passed
assertObjectsEqual(shirtObject, differentShirtObject); // => Assertion Failed



