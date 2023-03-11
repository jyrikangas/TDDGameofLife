

export class Game {
  width;
  height;
  board;
  constructor(width, height, state) {
    this.width = width;
    this.height = height;
    this.board = new Array(height)
    for(let i = 0; i < height; i++) {
      this.board[i] = new Array(width);
    }
    this.state = state || ""
    this.parse();
  }

  parse() {
    let pointer = 0;
    let lineEnd= false;
    let number = 0;
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        console.log(i,j,pointer, this.state[pointer]);
        
        if (this.state[pointer] === "!") {
          console.log(this.board);
          return;
        }
        if (number > 0) {
          this.board[i][j] = this.state[pointer] === "o";
          number--;
          if (number === 0) {
            pointer++;
          }
        } else if (lineEnd) {
          this.board[i][j] = false;
        } else if (this.state[pointer] === "$") {
          console.log(i, j, "line end");

          this.board[i][j] = false;
          console.log(this.board);
          lineEnd = true;
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
      lineEnd = false;
      pointer++;

    }
  }
  toString() {
    return this.state
  }
}
