/**
 * Write a function (WITHOUT USING STRING methods) to reverse the order of a string.
 *
 * @param {string} value
 * @returns
 */
const reverseIt = (value) => {
  if (value === "") return "";
  else return reverseIt(value.substring(1)) + value.charAt(0);
};

export default reverseIt;
