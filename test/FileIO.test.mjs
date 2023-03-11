import { expect } from "chai";
import { FileIO } from "../src/FileIO.mjs";

describe("FileIO", () => {

    it("can read board size and state from .rle file", () => {
        let fileIO = new FileIO();
        let fileContent = fileIO.readRLEFile("glider.rle");
        expect(fileContent.state).to.equal("bob$2bo$3o!");
    })
    it("can read board size and state from .rle file with a multiple line state", () => {
        let fileIO = new FileIO();
        let fileContent = fileIO.readRLEFile("gosperglider.rle");
        expect(fileContent.state).to.equal("24bo11b$22bobo11b$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o14b$2o8bo3bob2o4bobo11b$10bo5bo7bo11b$11bo3bo20b$12b2o!");
    })
})
