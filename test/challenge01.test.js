import reverseIt from "../src/challenge01";

describe("Challenge 01", () => {
  const t1 = "JavaScript";
  const t2 = [
    "JavaScript",
    "HTML",
    "XML",
    "Java",
    "Python",
    "Perl",
    "Go",
    "C++",
  ];

  test("Reverse a single string", () => {
    expect(reverseIt(t1)).toBe(t1.split('').reverse().join(''))
  });

  test("Reverse all strings in an array", () => {
    for (let i = 0; i < t2.length; i++) {
      expect(reverseIt(t2[i])).toBe(t2[i].split('').reverse().join(''))
    }
  });
});
