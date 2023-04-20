const convertToCelsius = function (valueFahrenheit) {
  let resultCelsius = (valueFahrenheit - 32) / 1.8;

  return Math.round(resultCelsius * 10) / 10;
};
const convertToFahrenheit = function (valueCelsius) {
  resultFahrenheit = 1.8 * valueCelsius + 32;

  return Math.round(resultFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
