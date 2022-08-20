/**
 * Given two strings, find the number of common characters between them.
 */

function solution(s1, s2) {
  var count = 0;
  var str = "";
  for (var i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) > -1) {
      count++;
      s2 = s2.replace(s1[i], "");
    }
  }

  return count;
}
