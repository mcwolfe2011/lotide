const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns ✅✅✅ Assertion Passed", () => {
    assert("Lighthouse Labs", "Bootcamp");
  });
  it("returns 🛑🛑🛑 Assertion Failed", () => {
    assert("Lighthouse Labs", [1, 2, 3]);
  });
});

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

