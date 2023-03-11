import { readFileSync, writeFileSync } from "node:fs"
export class FileIO {

    readRLEFile(fileName) {

        let res = readFileSync(fileName, (err, data) => {
            if (err) {
                throw err;
            }
            return data.toString();
        });

        let fileContent = {}
        res.toString().split("\n")
        for (let i = 0; i < res.toString().split("\n").length; i++) {
            if (res.toString().split("\n")[i].startsWith("#")) {
                continue;
            }
            if (fileContent.state !== undefined && res.toString().split("\n")[i + 1] !== undefined) {
                fileContent.state = fileContent.state + res.toString().split("\n")[i + 1].replace("\r", "");
            }
            if (res.toString().split("\n")[i].startsWith("x")) {
                fileContent.width = Number(res.toString().split("\n")[i].split(",")[1].split("=")[1]);
                fileContent.height = Number(res.toString().split("\n")[i].split(",")[0].split("=")[1]);
                fileContent.state = res.toString().split("\n")[i + 1].replace("\r", "");
            }
        }
        return fileContent;
    }

    writeRLEFile(fileName, height, width, state) {
        if (state.length > 70) {
            var states = [];
            let i = 0;
            while (true) {
                states.push(state.slice(i, i+70));
                if (state.substring(i+70).length < 70) {
                    states.push(state.slice(i+70));
                    break;
                }else {
                    i += 70;
                }
            }
        }
        if (states) {
            state = states.join("\n");
        }
        writeFileSync(fileName, "x = " + width + ", y = " + height + "\n" + state);
    }
}
