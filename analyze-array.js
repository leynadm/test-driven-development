function analyzeArray(numbers) {

   if (!Array.isArray(numbers)) return;

   if(!checkOnlyNumbers(numbers)) return 'Not an array'
   
   function checkOnlyNumbers(numbers){

    return numbers.every(element =>{
        return typeof element === 'number';
    });
   }

  function calculateAverage(numbers) {
    let length = calculateLength(numbers);

    const initialValue = 0;

    const sumWithInitial = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    return sumWithInitial / length;
  }

  function calculateMin(numbers) {
    numbers.sort();

    return numbers[0];
  }

  function calculateMax(numbers) {
    let maxNumber = Math.max(...numbers);
    return maxNumber;
  }

  function calculateLength(numbers) {
    let arrLength = numbers.length;
    return arrLength;
  }

  const resultsObj = {
    average: calculateAverage(numbers),
    min: calculateMin(numbers),
    max: calculateMax(numbers),
    length: calculateLength(numbers),
  };

  return resultsObj;
}

module.exports = analyzeArray;
