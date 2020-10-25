module.exports = function toReadable (number) {

let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let stringNumber = number.toString();

function lessHundred(number) {
  let ten = Math.trunc(number / 10);

  if (ten === 0) {
    return nums[number];
      } else {
        if (ten === 1) {
          return teens[number % 10];
      } else {
        let teensPlus = tens[ten - 2];
        if (number % 10 === 0) {
          return teensPlus;
      } else {
          return teensPlus + ' ' + nums[number % 10];
              }
          }
      }
  }
  
let hundred = Math.trunc(number / 100);

if (hundred === 0) {
  return lessHundred(number);
    } else {
        let res = nums[hundred] + ' hundred';
        if (stringNumber[1] === '0' && stringNumber[2] === '0') {
            return res;
        } else {
            return res + ' ' + lessHundred(number % 100);
        }
    }
}
