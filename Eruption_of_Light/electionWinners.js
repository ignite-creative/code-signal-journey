/**
 * Elections are in progress!
 * Given an array of the numbers of votes given to each of the candidates so far,
 * and an integer k equal to the number of voters who haven't cast their vote yet,
 * find the number of candidates who still have a chance to win the election.
 *
 * The winner of the election must secure strictly more votes than any other candidate.
 *
 * If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.
 */

function solution(votes, k) {
  var max = Math.max(...votes);
  var numOfMax = votes.filter((v) => v === max).length;
  return votes.reduce(
    (acc, v) => acc + ((v === max && numOfMax === 1) || v + k > max ? 1 : 0),
    0
  );
}
