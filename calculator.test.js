const calculator = require("./calculator");

test("Sum numbers", () => {
  expect(calculator.sum(2, 2)).toBe(4);
});

/* 
test("Subtract numbers", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("Divide numbers", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test("Multiply numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
 */