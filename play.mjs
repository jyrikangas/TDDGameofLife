import {Main} from './src/Main.mjs';
import Yargs from 'yargs/yargs';

const options = Yargs(process.argv.slice(2)).argv;
let main = new Main();
main.play(options.file, options.iterations);