/**
 * Given a string, output its longest prefix which contains only digits.
 */

function solution(inputString) {
  for (var i = 0; i < inputString.length; i++) {
    if (!/\d/.test(inputString[i])) break;
  }
  return inputString.substring(0, i);
}
