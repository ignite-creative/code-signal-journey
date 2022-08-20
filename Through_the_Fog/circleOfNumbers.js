/**
 * Consider integer numbers from 0 to n - 1 written down along the circle
 * in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
 *
 * Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
 */

function solution(n, firstNumber) {
  var numArray = [];
  var halfWay = n / 2;

  for (var i = 0; i < n; i++) {
    numArray.push(i);
  }

  if (firstNumber < halfWay) {
    return numArray[firstNumber + halfWay];
  }

  return numArray[firstNumber - halfWay];
}
