import { Arguments, Command, yargs } from "./deps.ts";
// import { format } from "./reqs.ts";
import { version } from "./version.ts";

// yargs(Deno.args)
//     .command("download <files...>", "download a list of files", (yargs: any) => {
//         return yargs.positional("files", {
//             describe: "a list of files to do something with"
//         })
//     }, (argv: Arguments) => {
//         console.info(argv)
//     })
//     .strictCommands()
//     .demandCommand(1)
//     .argv;

const program = new Command("talk");

program.version(version);

program
    .option("-c, --config <FILE>", "load configuration file")
    .option("-v, --verbose", "enable verbose mode");

program
    .command("new", "create a new session");

program.parse(Deno.args);

// console.log(format(new Date(), "dd/MM/yyyy"));
