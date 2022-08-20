/**
 * Let's define digit degree of some positive integer
 * as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
 *
 * Given an integer, find its digit degree.
 */

function solution(n) {
  if (n < 10) return 0;
  return (
    1 +
    solution(
      Number(
        String(n)
          .split("")
          .map(Number)
          .reduce((a, b) => a + b)
      )
    )
  );
}
