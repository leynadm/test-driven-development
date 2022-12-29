const calculator = require("./calculator");

test("Sum numbers", () => {
  expect(calculator.sum(2, 2)).toBe(4);
});

test("Sum numbers", () => {
  expect(calculator.sum(0, 0)).toBe(0);
});

test("Subtract numbers", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("Subtract numbers", () => {
  expect(calculator.subtract(3, 4)).toBe(-1);
});

test("Divide numbers", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test("Divide numbers", () => {
  expect(calculator.divide(1, 0)).toBe(Infinity);
});

test("Multiply numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
