/**
 * Call two arms equally strong if the heaviest weights they each are able to lift are equal.
 *
 * Call two people equally strong if their strongest arms are equally strong
 * (the strongest arm can be both the right and the left),
 * and so are their weakest arms.
 *
 * Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
 */

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  var you = [yourLeft, yourRight];
  var friend = [friendsLeft, friendsRight];
  you.sort(), friend.sort();
  console.log(you, friend);
  for (var i = 0; i < you.length; i++) {
    if (you[i] !== friend[i]) return false;
  }

  return true;
}
