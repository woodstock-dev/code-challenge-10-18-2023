import generatePassword from "../src/challenge02";

describe("Challenge 2", () => {
  test("Throw error for password", () => {
    for (let i = 0; i < 8; i++) {
      expect(() => generatePassword(i)).toThrow();
    }
  });

  test("Password length", () => {
    for (let i = 8; i < 100; i++) {
      expect(generatePassword(i)).toHaveLength(i);
    }
  });

  test("First letter", () => {
    for (let i = 8; i < 100; i++) {
      expect(generatePassword(i)[0]).toMatch(/[A-Z]/);
    }
  });

  test("Remaning letters", () => {
    for (let i = 8; i < 100; i++) {
      for (let j = 1; j < generatePassword(i).length; j++) {
        expect(generatePassword(i)[j]).toMatch(/^[\x22-\x7E]*$/);
      }
    }
  });
});
