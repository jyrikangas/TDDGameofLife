
import { Main } from '../src/Main.mjs';
import { expect } from 'chai';

describe('The app', () => {
    xit("should be able to create a game from a file", () => {
        let main = new Main();
        main.loadGame("glider.rle");
        expect(main.game.toString()).to.equal("bob$2bo$3o!");
    });
})