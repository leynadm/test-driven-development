const capitalize = require("./capitalize");

test("Capitalize first character in string", () => {
  expect(capitalize("me")).toBe("Me");
});

test("Capitalize first character when there are two words", () => {
  expect(capitalize("mE TODAY")).toBe("Me today");
});

test("Capitalize first character in string when follows a non-letter", () => {
  expect(capitalize("1 me")).toBe("1 me");
});

test("Capitalize first character even when there are multiple words", () => {
  expect(capitalize("ye ye ye ye")).toBe("Ye ye ye ye");
});

test("Capitalize first character in string even when full-case", () => {
  expect(capitalize("DGSASDD")).toBe("Dgsasdd");
});
