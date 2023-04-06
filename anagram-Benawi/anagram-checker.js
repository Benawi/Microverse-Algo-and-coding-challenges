module.exports = function (string1, string2) {
  // write your code here
  let first = string1.replace(/[^a-z0-9]/gi, "");
  let second = string2.replace(/[^a-z0-9]/gi, "");
  const result = first.toLowerCase().split("").sort().join("") ===
  second.toLowerCase().split("").sort().join("")

  return result;
}

