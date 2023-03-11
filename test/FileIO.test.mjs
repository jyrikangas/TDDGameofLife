import { expect } from "chai";
import { FileIO } from "../src/FileIO.mjs";

describe("FileIO", () => {

    it("can read a .rle file", () => {
        let fileIO = new FileIO();
        let fileContent = fileIO.readRLEFile("glider.rle");
        expect(fileContent).to.equal("bob$2bo$3o!");
    })
})
