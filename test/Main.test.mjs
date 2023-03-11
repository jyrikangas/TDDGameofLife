
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
        expect(main.game.toString()).to.equal("bob$2bo$3o!");
        unlinkSync("maintest.rle");
    });

    xit("should be able to read a file, simulate the specified number of iterations, and write the result to a file", () => {
        let main = new Main();
        main.loadGame("glider.rle");
        main.game.tick(5);
        main.writeToFile("maintest.rle");
        console.log(main.game.toString());
        expect(main.game.toString()).to.equal("$$!");
        unlinkSync("maintest.rle");
    })
})