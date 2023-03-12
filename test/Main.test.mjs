
import { Main } from '../src/Main.mjs';
import { expect } from 'chai';
import { unlinkSync } from 'fs';

describe('The app', () => {
    it("should be able to create a game from a file", () => {
        let main = new Main();
        main.loadGame("glider.rle");
        expect(main.game.toString()).to.equal("bob$2bo$3o!");
    });
    
    it("should be able to write a game to a file", () => {
        let main = new Main();
        main.loadGame("glider.rle");
        main.writeToFile("maintest.rle");
        main.loadGame("maintest.rle");
        expect(main.game.toString()).to.equal("bo$2bo$3o!");
        unlinkSync("maintest.rle");
    });

    it("should be able to read a file, simulate the specified number of iterations, and write the result to a file", () => {
        let main = new Main();
        main.loadGame("glider.rle");
        main.tick(5);
        main.writeToFile("maintest.rle");
        expect(main.game.parseGameState()).to.equal("$b2o$b2o!");
        unlinkSync("maintest.rle");
    })

    it("should output a new file when called with a .rle file and number of iterations", () => {
        let main = new Main();
        main.play("playtest.rle", 5);
        main.loadGame("playtest_out.rle")
        expect(main.game.state).to.equal("$b2o$b2o!");
        unlinkSync("playtest_out.rle");
    })
    
})