/**
 * Some people are standing in a row in a park.
 * There are trees between them which cannot be moved.
 * Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
 * People can be very tall!
 */

function solution(a) {
  const sortedA = [...a].sort((a, b) => a - b).filter((num) => num !== -1);
  let sortedAIndex = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) continue;
    else {
      a[i] = sortedA[sortedAIndex++];
    }
  }
  return a;
}
