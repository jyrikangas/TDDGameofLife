import { expect } from "chai";
import { Game } from "../src/Game.mjs";

describe("Game", () => {
  it("can be created", () => {
    let game = new Game(5, 5);
    expect(game.toString()).to.equal("");
  });

  it("can be created with a state", () => {
    let game = new Game(3, 3, "bo$2bo$3o!")
    expect(game.toString()).to.equal("bo$2bo$3o!");
  });

  it("parses the state into the board", () => {
    let game = new Game(3, 3, "bo$2bo$3o!")
    expect(game.board).to.deep.equal([[false, true, false], [false, false, true], [true, true, true]]);
  });
  
  it("can parse the board state into a string", () => {
    let game = new Game(3, 3, "bo$2bo$3o!")
    game.tick();
    game.tick();
    console.log(game.board);
    expect(game.parseGameState()).to.equal("$2bo$b2o!");
  });
  
});

describe("after a tick of the game ", () => {
  it("A dead board remains dead", () => {
    let game = new Game(3, 3, "$$!")
    game.tick();
    expect(game.parseGameState()).to.equal("$$!");
  });

  it("a board with 1 living cell has become a dead board", () => {
    let game = new Game(3, 3, "$bo$!")
    game.tick();
    expect(game.parseGameState()).to.equal("$$!");
  });

  it("a board with 2 living cells next to each other has no living cells", () => {
    let game = new Game(3, 3, "$b2o$!")
    game.tick();
    expect(game.parseGameState()).to.equal("$$!");
  });

  it("a board with 3 living cells neighboring a dead cell has a fourth live cell be born", () => {
    let game = new Game(3, 3, "2bo$b2o$!")
    game.tick();
    expect(game.parseGameState()).to.equal("b2o$b2o$!");
  });

  it("a live cell with more than 3 live neighbours dies", () => {
    let game = new Game(3, 3, "3o$2o$!")
    game.tick();
    expect(game.parseGameState()).to.equal("obo$obo$!");
  });


});

