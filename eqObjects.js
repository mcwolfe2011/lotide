// Review
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual([1, 2, 3], [1, 2, 3]);

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

eqArrays(["Lighthouse", "Labs", "Bootcamp"], [1, 2, "Bootcamp"]);

const eqObjects = function(object1, object2) {
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



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

console.log("This is with eqArrays test: " + eqArrays(shirtObject, anotherShirtObject)); // => true

console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject))); // => undefined false



const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

console.log(eqObjects(shirtObject, anotherShirtObject)); // => true



const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject))); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject))); // => false