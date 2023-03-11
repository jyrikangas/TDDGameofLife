import { expect } from "chai";
import { Game } from "../src/example.mjs";

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
});
