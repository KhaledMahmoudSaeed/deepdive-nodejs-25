import fs from "fs";
import { program } from "commander";
import inquirer from "inquirer";

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

program.command("add").alias("a").description("Add a course");
inquirer
  .prompt([
    {
      type: "input",
      name: "courseName",
      message: "Enter the course name",
    },
    {
      type: "input",
      name: "courseDescription",
      message: "Enter the course description",
    },
  ])
  .then((answers) => {
    const { courseName, courseDescription } = answers;
    fs.appendFile(
      "./courses.txt",
      `Course Name: ${courseName}\nDescription: ${courseDescription}\n\n`,
      (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("Course added successfully!");
        }
      }
    );
  });
program.parse();
