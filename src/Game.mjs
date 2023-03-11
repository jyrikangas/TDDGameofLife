

export class Game {
  width;
  height;
  board;
  constructor(width, height, state) {
    this.width = width;
    this.height = height;
    this.state = state || ""
    this.parse();
  }



  parse() {
    this.board = this.initializeBoard();
    let pointer = 0;
    let number = 0;
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.state[pointer] === "$") {
          break;
        }
        if (number > 0) {
          this.board[i][j] = this.state[pointer] === "o";
          number--;
          if (number === 0) {
            pointer++;
          }
        } else if (this.state[pointer] === "b" || this.state[pointer] === "o") {
          this.board[i][j] = this.state[pointer] === "o";
          pointer++;
        } else {
          number = Number (this.state[pointer]);
          pointer++;
          this.board[i][j] = this.state[pointer] === "o";
          number--;
        }
      }
      pointer++;
    }
  }

  initializeBoard() {
    var board = new Array(this.height)
    for(let i = 0; i < this.height; i++) {
      board[i] = new Array(this.width).fill(false);
    }
    return board;
  }

  tick() {
    let newBoard = this.initializeBoard();
    let neighbours = 0;
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        let lastRow = i-1>0?i-1:0;
        let nextRow = i+2<this.height?i+2:this.height;
        let lastCol = j-1>0?j-1:0;
        let nextCol = j+2<this.width?j+2:this.width;

        for (let ii = lastRow; ii < nextRow; ii++) {
          for (let jj = lastCol; jj < nextCol; jj++){
            if (this.board[ii][jj]){
              neighbours++;
            }
          }
        }
        if (this.board[i][j]) {
          if (neighbours>2 && neighbours<5) {
            newBoard[i][j]=true;
          }
        } else {
          if (neighbours===3) {
            newBoard[i][j]=true;
          }
        }
        neighbours = 0;
      }
    }
    this.board=newBoard;
  }

  toString() {
    return this.state
  }
}
