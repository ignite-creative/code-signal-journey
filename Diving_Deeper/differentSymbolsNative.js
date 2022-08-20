/**
 * Given a string, find the number of different characters in it.
 */

function solution(s) {
  const chars = s.split("");

  return new Set(chars).size;
}
