const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return (array[0]);
};

assertEqual(head([5,6,7]), 5);//=> Passed
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//=> Passed
assertEqual(head([]), "yup");//=> Failed