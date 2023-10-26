/**
 * Write a function (WITHOUT USING STRING methods) to reverse the order of a string.
 *
 * @param {string} value
 * @returns
 */
const reverseIt = (value) => {
  return Array.from(value).reverse().join("");
};

export default reverseIt;
