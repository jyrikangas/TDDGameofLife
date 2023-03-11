import {FileIO} from "./FileIO.mjs";
import {Game} from "./Game.mjs";

export class Main {
    constructor() {
        this.fileIO = new FileIO();
        this.game = null;
    }

    loadGame(fileName) {
        let state = this.fileIO.readRLEFile(fileName);
        this.game = new Game(5, 5, state);
    }

}