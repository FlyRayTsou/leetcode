// Runtime: 93 ms, faster than 58.33% of TypeScript online submissions for Game of Life.
// Memory Usage: 43.1 MB, less than 70.83% of TypeScript online submissions for Game of Life.
function gameOfLife(board: number[][]): void {
    let resultBoard: number[][] = [];
    for (let i = 0; i < board.length; i++) {
        resultBoard[i] = [...board[i]];
    }
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            resultBoard[y][x] = calculateLife(board, x, y);
        }
    }
    for (let i = 0; i < resultBoard.length; i++) {
        board[i] = [...resultBoard[i]];
    }
};

function calculateLife(board: number[][], x: number, y: number) {
    let countOfLife: number = 0;
    const xLimit = board[0].length-1;
    const yLimit = board.length-1;
    if(x !== 0 && y !== 0 && board[y-1][x-1] === 1) countOfLife++;
    if(y !== 0 && board[y-1][x] === 1) countOfLife++;
    if(y !== 0 && x < xLimit && board[y-1][x+1] === 1) countOfLife++;
    if(x !== 0 && board[y][x-1] === 1) countOfLife++;
    if(x < xLimit && board[y][x+1] === 1) countOfLife++;
    if(x !== 0 && y < yLimit && board[y+1][x-1] === 1) countOfLife++;
    if(y < yLimit && board[y+1][x] === 1) countOfLife++;
    if(x < xLimit && y < yLimit && board[y+1][x+1] === 1) countOfLife++;
    if(board[y][x] === 1) {
        if (countOfLife === 2 || countOfLife === 3) {
            return 1;
        }
        return 0;
    }
    if(board[y][x] === 0) {
        if (countOfLife === 3) return 1;
    }
    return 0;
}