

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  let mins = parseInt(time.split(':')[1]);
  let hrs = parseInt(time.split(':')[0]);
  const numbers = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'elven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'];


  if (mins == 0) {
    return `${numbers[hrs - 1]} o'clock`
  } else if (mins == 15) {
    return `quarter past ${numbers[hrs - 1]}`
  }
  else if (mins == 45) {
    hrs = hrs == 12 ? 1 : hrs+1;
    return `quarter to ${numbers[hrs - 1]}`
  }
  else if (mins < 30) {
    return `${numbers[mins - 1]} past ${numbers[hrs - 1]}`;
  } else if (mins == 30) {
    return `half past ${numbers[hrs - 1]}`
  } else {
    mins = 60 - mins;
    hrs = hrs == 12 ? 1 : hrs+1;

    return `${numbers[mins - 1]} to ${numbers[hrs - 1]}`
  }


  // if (time === '0:00') {
  //   return 'midnight';
  // }

  // return 'half past eight';
}
console.log(convertTimeToWords('12:31'))
module.exports = { convertTimeToWords };