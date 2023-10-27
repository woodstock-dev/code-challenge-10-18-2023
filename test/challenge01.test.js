import * as challenge01 from "../src/challenge01";

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
    expect(challenge01.reverseIt(t1)).toBe(t1.split("").reverse().join(""));
  });

  test("Reverse all strings in an array", () => {
    let t2Rev = [];
    for (let i = 0; i < t2.length; i++) {
      t2Rev.push(t2[i].split("").reverse().join(""));
    }
    expect(challenge01.reverseItArr(t2)).toEqual(t2Rev);
  });
});
