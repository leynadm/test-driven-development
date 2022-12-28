function reverseString(string) {
  let stringArr = string.split("");

  let newString = "";

  let element;

  for (let index = stringArr.length - 1; index >= 0; index--) {
    element = stringArr[index];

    newString = newString + stringArr[index];
  }

  return newString
}

module.exports = reverseString;
