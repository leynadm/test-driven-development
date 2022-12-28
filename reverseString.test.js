const reverseString = require("./reverseString");

test("Reverse a single word string", () => {
  expect(reverseString("Solar")).toBe("raloS");
});

test("Reverse two words string", () => {
  expect(reverseString("Better words")).toBe("sdrow retteB");
});

test("Reverse a string containing numbers", () => {
  expect(reverseString("1-2-3-4-5-6")).toBe("6-5-4-3-2-1");
});