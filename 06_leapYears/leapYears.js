const leapYears = function (year) {
  // A shorter option
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

  // Here is another way to get the same result, but a little more long.
  /*
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
  */
};

// Do not edit below this line
module.exports = leapYears;
