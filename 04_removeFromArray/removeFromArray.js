const removeFromArray = function (arr, ...elements) {
  let index;

  for (let arg of elements) {
    index = arr.indexOf(arg);
    if (index === -1) continue;
    arr.splice(index, 1);
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
