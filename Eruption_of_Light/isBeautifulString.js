/**
 * A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string;
 * ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.
 * Given a string, check whether it is beautiful.
 */

function solution(inputString) {
  return inputString
    .split("")
    .sort()
    .join("")
    .replace(/([a-z])\1*/g, (it) => it.length + ",")
    .split(",")
    .slice(0, -1)
    .map(Number)
    .every(
      (el, i, ar) =>
        inputString.indexOf(String.fromCharCode(i + "a".charCodeAt(0))) >= 0 &&
        (i == 0 || ar[i] <= ar[i - 1])
    );
}
