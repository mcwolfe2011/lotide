//test/headTest.js
const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


head([5,6,7]);
assertEqual(head([5,6,7]), 5);//=> Passed
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//=> Passed
assertEqual(head([]), "yup");//=> Failed