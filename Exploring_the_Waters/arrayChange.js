/**
 * You are given an array of integers.
 *
 * On each move you are allowed to increase exactly one of its element by one.
 *
 * Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
 */

function solution(inputArray) {
  let counter = 0;
  inputArray.reduce((a, b) => {
    if (a >= b) {
      const diff = a + 1 - b;
      counter += diff;
      return a + 1;
    }
    return b;
  });
  return counter;
}
