import inquirer from "inquirer";
import { program } from "commander";
import fs from "fs";
program
  .name("Get GitHub Repos")
  .description("A simple CLI to get GitHub repositories of a user")
  .version("1.0.0");

program
  .command("repos")
  .action(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "username",
          message: "Enter GitHub username",
        },
      ])
      .then((answers) => {
        fetch(`https://api.github.com/users/${answers.username}/repos`)
          .then((response) => response.json())
          .then((data) => {
            data.forEach((repo) => {
              fs.appendFile(
                `./${repo.name}.txt`,
                `${repo.name}\n`,
                "utf-8",
                (err) => {
                  if (err) {
                    console.error("Error writing to file", err);
                  }
                }
              );
            });
          });
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("error easy", error);
    } else {
      console.log("error hard ,your are idoit ", error);
    }
  });

program.parse();
