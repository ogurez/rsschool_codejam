module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr);
  const arrOfSums = arr.map(element => sum - element);
  return arrOfSums;
};
