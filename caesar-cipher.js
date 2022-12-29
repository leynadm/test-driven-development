function caesarCypher(string, shift) {
  if (string === null) return;

  shift = shift ?? 13;

  let lettersArr = [];

  const alphabetArr = [];
  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < letters.length; i++) {
    alphabetArr.push(letters[i]);
  }

  let stringArr = string.split("");

  let newString = "";

  stringArr.forEach((element) => {
    element = element.toLowerCase();

    if (alphabetArr.includes(element)) {
      let indexOfLetter = alphabetArr.indexOf(element);
      let newIndex = calculateNewIndex(indexOfLetter, shift);
      newString = newString + alphabetArr[newIndex].toUpperCase();
    }
  });

  return newString;

  function calculateNewIndex(indexOfLetter, shift) {
    shift = shift ?? 13;

    let indexSum = indexOfLetter + shift;

    if (indexSum > 25) {
      indexSum = indexSum - 25;
    }
    return indexSum;
  }
}

module.exports = caesarCypher;