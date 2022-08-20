/**
 * Given a string, your task is to replace each of its characters by the next one in the English alphabet;
 * i.e. replace a with b, replace b with c, etc (z would be replaced by a).
 */

function solution(inputString) {
  return inputString
    .split("")
    .map((e) => {
      if (e === "z") return "a";
      return String.fromCharCode(e.charCodeAt() + 1);
    })
    .join("");
}
