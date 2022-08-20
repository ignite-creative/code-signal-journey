/**
 * Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
 */

function solution(inputArray) {
  const diff = [];
  inputArray.reduce((a, b) => {
    diff.push(Math.abs(a - b));
    return b;
  });

  return Math.max(...diff);
}
