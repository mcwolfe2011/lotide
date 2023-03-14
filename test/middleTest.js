const assert = require('chai').assert;
const middle = require('../middle');
middle();

describe("#middle", () => {
  it("returns middle '3 and 4' of an array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]));
  });
  it("returns middle '3' of an index array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]));
  });
});












