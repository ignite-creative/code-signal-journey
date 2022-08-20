/**
 * Given array of integers, remove each kth element from it.
 */

function solution(inputArray, k) {
  return inputArray.filter((el, i) => (i + 1) % k !== 0);
}
