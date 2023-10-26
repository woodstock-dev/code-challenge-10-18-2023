/**
 * Write a function (WITHOUT USING STRING methods) to reverse the order of a string.
 *
 * @param {string} value
 * @returns
 */
export const reverseIt = (value) => {
  if (value === "") return "";
  else return reverseIt(value.substring(1)) + value.charAt(0);
};

export const reverseItArr = (arr) => {
  return arr.map(ele => reverseIt(ele))
}