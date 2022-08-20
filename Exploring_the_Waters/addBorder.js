/**
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it
 */

function solution(picture) {
  const verticalBorder = "*".repeat(picture[0].length);
  picture.unshift(verticalBorder);
  picture.push(verticalBorder);
  return picture.map((el) => "*" + el + "*");
}
