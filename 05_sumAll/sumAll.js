const sumAll = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";

  if (num1 < 0 || num2 < 0) return "ERROR";

  let sumTotal = 0;

  const arr = [num1, num2];

  arr.sort(function (a, b) {
    return a - b;
  });

  let min = arr[0];
  let max = arr[1];

  // console.log(arr);

  for (let i = min; i <= max; i++) {
    sumTotal += i;
  }

  return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
