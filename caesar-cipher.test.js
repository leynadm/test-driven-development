const caesarCipher = require("./caesar-cipher");

test("Test simple string", () => {
    expect(caesarCipher("abc")).toBe("NOP");
});

test("Test multiple words", () => {
    expect(caesarCipher("A B C",14)).toBe("OPQ");
});

test("Test strings with punctuation", () => {
    expect(caesarCipher("A B C!!!")).toBe("NOP");
});