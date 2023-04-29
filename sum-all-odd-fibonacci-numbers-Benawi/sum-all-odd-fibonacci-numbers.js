const generateFibonnacciSeq = (num) => {
  let sequence = [1, 1];
  let fibNumber;
  for (let i = 0; i < num; i++) {
    fibNumber = sequence[i] + sequence[i + 1];
    if (fibNumber <= num) {
      sequence.push(fibNumber);
    }
  }
  return sequence;
};
const getOdd = (arr) => {
  return arr.filter((num) => num % 2 !== 0);
};
const arrSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
module.exports = function (num) {
  const sequence = generateFibonnacciSeq(num)
  const oddNumbers = getOdd(sequence);
  return arrSum(oddNumbers);
};
