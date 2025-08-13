import fs from "fs";
import { program } from "commander";

program
  .name("Wirte in a file ")
  .description("try it out peasant boy ^_^")
  .version("1.25.0");

program
  .command("collect")
  .argument("<filename>", "The file to write to")
  .option("-m, --message <message>", "The message to write")
  .action((filename, options) => {
    const message = options.message || "no message provided";

    fs.appendFile(`./${filename}.txt`, `${message}\n`, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log(`Message written to ${filename}`);
      }
    });
  });
program.parse();
