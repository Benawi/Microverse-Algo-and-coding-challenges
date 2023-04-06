module.exports = function  (str) {
  // write your code here

  // Turns string into lowercase and gets only letters and numbers
  let lowerStr = str.toLowerCase().match(/[a-z0-9]/g);
  // Returns false if there is no string
  if (!lowerStr) {
    return false;
  }
  // Checks first to last until reaches middle
  for (let i = 0; i < lowerStr.length / 2; i++) {
    if (lowerStr[i] != lowerStr[lowerStr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

