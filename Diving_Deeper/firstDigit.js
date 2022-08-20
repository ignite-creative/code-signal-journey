/**
 * Find the leftmost digit that occurs in a given string.
 */

function solution(inputString) {
  return inputString[inputString.search(/\d/)];
}
