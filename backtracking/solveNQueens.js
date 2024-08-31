function solveNQueens(n) {
    const board = new Array(n).fill(null).map(() => new Array(n).fill('.'));
    const result = [];
  
    function couldPlace(row, col) {
      // check if a queen can be placed on board[row][col]
      // check if this row is not under attack from any previous queen in that column
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') {
          return false;
        }
      }
  
      // check if this row is not under attack from any previous queen in the diagonal
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
          return false;
        }
      }
  
      // check if this row is not under attack from any previous queen in the diagonal
      for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') {
          return false;
        }
      }
  
      return true;
    }
  
    function backtrack(row = 0) {
      if (row === n) {
        const temp = board.map((x) => x.join(''));
        result.push(temp);
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (couldPlace(row, col)) {
          board[row][col] = 'Q';
          backtrack(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    backtrack();
  
    return result;
  }
  
  console.log(solveNQueens(4));