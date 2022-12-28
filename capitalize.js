function capitalize(string) {
  let stringArr = string.split("");

  let newString = "";

  let element;

  for (let index = 0; index < stringArr.length; index++) {
    if (index === 0) {
      element = stringArr[index].toUpperCase();

      newString = newString + element;
    } else {
      element = stringArr[index].toLowerCase();

      newString = newString + element;
    }
  }

  return newString;
}

module.exports = capitalize;
