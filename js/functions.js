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

const isMeetingWithinWorkingHours = (startTime, endTime, meetingStart, meetingDuration) => {

  const getTimeInMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startInMinutes = getTimeInMinutes(startTime);
  const endInMinutes = getTimeInMinutes(endTime);
  const meetingStartInMinutes = getTimeInMinutes(meetingStart);

  const meetingEndInMinutes = meetingStartInMinutes + meetingDuration;

  return meetingStartInMinutes >= startInMinutes && meetingEndInMinutes <= endInMinutes;
};

// console.log(isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90)); // true
// console.log(isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120));     // true
// console.log(isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90)); // false
// console.log(isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90));  // false
// console.log(isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900)); // false
