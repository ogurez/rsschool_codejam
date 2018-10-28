module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr);
  const arrOfSums = arr.map(array => sum - array);
  return arrOfSums;
};
