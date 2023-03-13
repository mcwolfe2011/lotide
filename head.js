const assertEqual = require('./assertEqual');

const head = function(array) {
  return (array[0]);
};

head([5,6,7]);
assertEqual(head([5,6,7]), 5);//=> Passed
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//=> Passed
assertEqual(head([]), "yup");//=> Failed

module.exports = head;