import { readFileSync } from "node:fs"
export class FileIO {

    constructor() {
    }

    readRLEFile(fileName) {

        let res = readFileSync(fileName, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data.toString());
            return data.toString();
        });

        return res.toString().split("\n").pop();
    }
}
