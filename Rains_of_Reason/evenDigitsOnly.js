/**
 * Check if all digits of the given integer are even.
 */

function solution(n) {
  let digits = n.toString().length;
  for (let i = 0; i < digits; i++) {
    if (Math.trunc((n % 10 ** (i + 1)) / 10 ** i) % 2 !== 0) return false;
  }
  return true;
}
