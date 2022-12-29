const analyzeArray = require("./analyze-array");

test("Test an array of numbers", () => {
    const numbers = [1,2,3];
    const expectedResult = {
        average:2,
        min:1,
        max:3,
        length:3
    };
    const result = analyzeArray(numbers);
    expect(result).toStrictEqual(expectedResult);
});

test("Test an empty array", () => {
    const numbers = [];
    const expectedResult = {
        average:NaN,
        min:undefined,
        max:-Infinity,
        length:0
    };
    const result = analyzeArray(numbers);
    expect(result).toStrictEqual(expectedResult);
});

test("Test an array with non-numbers", () => {
    const numbers = [1,2,3,"a"];
    const result = analyzeArray(numbers);
    expect(result).toBe('Not an array');
});