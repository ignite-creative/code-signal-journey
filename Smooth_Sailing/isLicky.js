/**
 * Ticket numbers usually consist of an even number of digits.
 * A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
 * Given a ticket number n, determine if it's lucky or not.
 */

function solution(n) {
  let count = 0;
  n = String(n)
    .split("")
    .map((t) => {
      return parseInt(t);
    });
  n.forEach((el, i) => {
    i < n.length / 2 ? (count += el) : (count -= el);
  });
  return count == 0;
}
