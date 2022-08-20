/**
 * Write a function that reverses characters in (possibly nested) parentheses in the input string.
 * Input strings will always be well-formed with matching ()s.
 */

function solution(inputString) {
  let s = inputString;
  while (true) {
    let c = s.indexOf(")");
    if (c === -1) break;
    let o = s.substring(0, c).lastIndexOf("(");
    let start = s.substring(0, o);
    let middle = s
      .substring(o + 1, c)
      .split("")
      .reverse()
      .join("");
    let end = s.substring(c + 1, s.length);
    s = start + middle + end;
  }
  return s;
}
