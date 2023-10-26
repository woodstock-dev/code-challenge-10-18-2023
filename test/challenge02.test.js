import generatePassword from "../src/challenge02"

describe('Challenge 2', () => {


  test('Generate Password', () => {
    for (let i = 0; i < 100; i++) {
      if (i < 8) expect(() => generatePassword(i)).toThrow()
      else {
        expect(generatePassword(i)).toHaveLength(i)
        expect(generatePassword(i)[0]).toMatch(/[A-Z]/)
        for (let j = 1; j < generatePassword(i).length; j++){
          expect(generatePassword(i)[j]).toMatch(/^[\x22-\x7E]*$/) 
        }
      }
    }
  })
})