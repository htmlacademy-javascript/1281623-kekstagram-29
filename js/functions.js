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

// console.log(checkStringLength('проверяемая строка', 20)); // true
// console.log(checkStringLength('проверяемая строка', 10)); // false

// console.log(isPalindrome('топот')); // true
// console.log(isPalindrome('ДовОд')); // true
// console.log(isPalindrome('Кекс')); // false
// console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

// console.log(extractDigits('abc123xyz')); // 123
// console.log(extractDigits('2023 год')); // 2023
// console.log(extractDigits('ECMAScript 2022')); // 2022
// console.log(extractDigits('1 кефир, 0.5 батона')); // 105
// console.log(extractDigits('агент 007')); // 7
// console.log(extractDigits('а я томат')); // NaN
// console.log(extractDigits(2023)); // 2023
// console.log(extractDigits(-1)); // 1
// console.log(extractDigits(1.5)); // 15

