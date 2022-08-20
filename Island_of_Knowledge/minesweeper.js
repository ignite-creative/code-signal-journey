/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells.
 *
 * Starting off with some arrangement of mines we want to create a Minesweeper game setup.
 */

function solution(matrix) {
  const board = [];

  for (let x = 0; x < matrix.length; x++) {
    board.push([]);

    for (let y = 0; y < matrix[0].length; y++) {
      board[x][y] = 0;

      // top
      if (matrix[x - 1] !== undefined) if (matrix[x - 1][y]) board[x][y]++;

      // bellow
      if (matrix[x + 1] !== undefined) if (matrix[x + 1][y]) board[x][y]++;

      // left
      if (matrix[x][y - 1] !== undefined) if (matrix[x][y - 1]) board[x][y]++;

      // right
      if (matrix[x][y + 1] !== undefined) if (matrix[x][y + 1]) board[x][y]++;

      //  top left
      if (matrix[x - 1] !== undefined) if (matrix[x - 1][y - 1]) board[x][y]++;

      // top right
      if (matrix[x - 1] !== undefined) if (matrix[x - 1][y + 1]) board[x][y]++;

      // bottom left
      if (matrix[x + 1] !== undefined) if (matrix[x + 1][y - 1]) board[x][y]++;

      // bottom right
      if (matrix[x + 1] !== undefined) if (matrix[x + 1][y + 1]) board[x][y]++;
    }
  }

  return board;
}
