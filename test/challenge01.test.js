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
    const v = reverseIt(t1);
    expect(v).toBe("tpircSavaJ");
  });

  test("Reverse all strings in an array", () => {
    // Reverse all string in an array
  });
});
