const tail = require('../tail');
const assert = require('chai');
tail();

describe("#tail", () => {
  it("returns the word Lighthouse and Labs", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]));
  });
});



// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!