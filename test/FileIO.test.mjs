import { expect } from "chai";
import { FileIO } from "../src/FileIO.mjs";
import { unlinkSync, readFileSync } from "fs";

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
    it("can write game details and state to a .rle file", () => {
        let fileIO = new FileIO();
        let fileContent = fileIO.readRLEFile("glider.rle");
        fileIO.writeRLEFile("test.rle", fileContent.height, fileContent.width, fileContent.state);
        let fileContent2 = fileIO.readRLEFile("test.rle");
        expect(fileContent2.state).to.equal("bob$2bo$3o!");
        unlinkSync("test.rle");
    })

    it("can write game details and state with multiple lines to a .rle file", () => {
        let fileIO = new FileIO();
        let fileContent = fileIO.readRLEFile("gosperglider.rle");
        fileIO.writeRLEFile("test2.rle", fileContent.height, fileContent.width, fileContent.state);
        let fileContent2 = fileIO.readRLEFile("test2.rle");
        expect(fileContent2.state).to.equal("24bo11b$22bobo11b$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o14b$2o8bo3bob2o4bobo11b$10bo5bo7bo11b$11bo3bo20b$12b2o!");
        unlinkSync("test2.rle");
    })

    it("limits the width of the state to 70 characters", () => {
        let fileIO = new FileIO();
        let fileContent = fileIO.readRLEFile("gosperglider.rle");
        fileIO.writeRLEFile("test2.rle", fileContent.height, fileContent.width, fileContent.state);
        let res = readFileSync("test2.rle", (err, data) => {
            if (err) {
                throw err;
            }
            return data.toString();
        });
        for (let i = 0; i < res.toString().split("\n").length; i++) {
            expect(res.toString().split("\n")[i].length).to.be.lessThan(71);
        }
        unlinkSync("test2.rle");
        })
        
})
