const middle = function(array) {
  let midItems = [];
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  let middleIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    midItems.push(array[middleIndex - 1]);
    midItems.push(array[middleIndex]);
  } else {
    midItems.push(array[middleIndex]);
  }
  return midItems;
};



module.exports = middle;