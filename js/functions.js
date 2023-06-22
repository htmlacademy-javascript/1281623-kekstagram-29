/* eslint-disable no-unused-vars */
const checkStringLength = (string, length) => string.length <= length;

const isPalindrome = (string) => {
  string = string.replaceAll(/\s/g, '').toLowerCase();

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const extractDigits = (input) => {
  const digits = input.toString().match(/\d/g);

  if (digits === null) {
    return NaN;
  }

  return parseInt(digits.join(''), 10);
};
