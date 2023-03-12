import {FileIO} from "./FileIO.mjs";
import {Game} from "./Game.mjs";

export class Main {
    constructor() {
        this.fileIO = new FileIO();
        this.game = null;
    }
    play(fileName, iterations) {
        this.loadGame(fileName);
        this.tick(iterations);
        this.writeToFile(fileName.slice(0, fileName.length-4) + "_out.rle");
    }

    loadGame(fileName) {
        let fileContent = this.fileIO.readRLEFile(fileName);
        this.game = new Game(fileContent.height, fileContent.width, fileContent.state);
    }

    writeToFile(fileName) {
        this.fileIO.writeRLEFile(fileName, this.game.height, this.game.width, this.game.parseGameState());
    }
    
    tick(iterations) {
        for (let i = 0; i < iterations; i++) {
            this.game.tick();
        }
    }
}