const reverseString = function (text) {
  let stringSplit = text.split("");
  let stringReverse = stringSplit.reverse().join("");

  return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
