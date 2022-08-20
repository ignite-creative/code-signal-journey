/**
 * Given an array of strings, return another array containing all of its longest strings.
 */

function solution(inputArray) {
  const s = inputArray;
  const m = inputArray
    .map((e) => {
      return e.length;
    })
    .sort((a, b) => b - a)[0];

  return s.filter((b) => {
    if (b.length === m) return b;
  });
}
