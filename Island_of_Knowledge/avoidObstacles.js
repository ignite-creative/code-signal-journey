/**
 * You are given an array of integers representing coordinates of obstacles situated on a straight line.
 * Assume that you are jumping from the point with coordinate 0 to the right.
 * You are allowed only to make jumps of the same length represented by some integer.
 * Find the minimal length of the jump enough to avoid all the obstacles.
 */

function solution(inputArray) {
  for (let i = 1; ; i++) {
    if (inputArray.every((element) => element % i)) return i;
  }
}
