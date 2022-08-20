/**
 * Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a.
 * In other words, find the element x in a, which minimizes the following sum:
 */

function solution(a) {
  const res = [];
  a.forEach((num) => {
    const sum = a.reduce((accum, next) => {
      return accum + Math.abs(next - num);
    }, 0);
    res.push(sum);
  });
  const lowest = Math.min(...res);
  return a[res.indexOf(lowest)];
}
