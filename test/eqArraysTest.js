const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns ✅✅✅ Assertion Passed", () => {
    assert(([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns 🛑🛑🛑 Assertion Failed", () => {
    assert("Lighthouse Labs", [1, 2, 3]);
  });
});



