function repeatStringNumTimes (str, num) {
  // write your code here
  var repeatString="";
  for (var i = 1; i<=num ; i++){
    repeatString = repeatString.concat(str);
  }
  return repeatString;
}

module.exports = repeatStringNumTimes
