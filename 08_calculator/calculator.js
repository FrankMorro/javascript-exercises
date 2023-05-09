const add = function (a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

const sum = function ([...array]) {
  return array.reduce((a, b) => a + b, 0)
}

const multiply = function ([...array]) {
  return array.reduce((a, b) => a * b)
}

const power = function (a, b) {
  return a ** b
}

const factorial = function (num) {
  if (num === 0) return 1
  let fact = 1
  for (i = num; i > 0; i--) {
    fact *= i
  }
  return fact
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
