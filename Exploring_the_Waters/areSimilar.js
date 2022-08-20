/**
 * Two arrays are called similar if one can be obtained from another
 * by swapping at most one pair of elements in one of the arrays.
 *
 * Given two arrays a and b, check whether they are similar.
 */

function solution(a, b) {
  const maxDiff = maxDiffs(a, b);
  if (maxDiff.length > 2 || maxDiff.length === 1) return false;
  if (maxDiff.length === 0) return true; // identical
  const [diff1, diff2] = maxDiff;
  return a[diff1] === b[diff2] && a[diff2] === b[diff1];
}
const maxDiffs = (a, b) => {
  let maxDiff = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      maxDiff.push(i);
    }
  }
  return maxDiff;
};
