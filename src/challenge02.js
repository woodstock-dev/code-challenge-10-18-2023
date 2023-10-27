/**
 * Write a function that generates a random password with:
 *
 * 1) Starts with a character
 * 2) Has a minimum length of 8
 * 3) Contains at least 1 number, 1 upper case, and lower case, and one special character.
 *
 * @param {number} length
 * @returns
 */
const generatePassword = (length) => {
  let password = [];
  if (length < 8)
    throw new Error("Password too short. Minimum of 8 charachters needed");
  else {
    const first = randomCharGen(65, 90);
    password.push(first);
    while (password.length < length) {
      let rest = randomCharGen(33, 126);
      password.push(rest);
    }
  }
  return Object.freeze(password.join(""));
};

const randomCharGen = (min, max) => {
  return String.fromCharCode(Math.floor(Math.random() * (max - min) + 1) + min);
};

export default generatePassword;
