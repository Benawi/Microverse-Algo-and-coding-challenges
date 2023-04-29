module.exports = function (num) {
  let prevNum = 0;
  let currNum = 1;
  let output = 0;
  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      output += currNum;
    }
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }
  return output;
}