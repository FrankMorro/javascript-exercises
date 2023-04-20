const repeatString = function (text, count) {
  if (count < 0) return "ERROR";

  return text.repeat(count);

  /*
  // Could this code, which will throw the same result

  let myText = "";
  for (let index = 0; index < count; index++) {
    myText += text;
  }

  return myText;
  */
};

// Do not edit below this line
module.exports = repeatString;
