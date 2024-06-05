#! /usr/bin/env node

// Making a simple Word Counter Project.

import inquirer from "inquirer";
import chalk from "chalk";

// Function to count words in a given text
async function countWords() {
  console.log(chalk.green("=========================================="));
  console.log(chalk.bgBlue.bold("\t\tWord Counter"));
  console.log(chalk.green("=========================================="));

  // Asking the user to enter the text
  let textAnswer = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: chalk.green("Enter the text to count words:"),
    },
  ]);

  console.log(chalk.blue("------------------------------------------"));
  console.log(chalk.yellow(`\tText entered: "${textAnswer.text}"`));
  console.log(chalk.blue("------------------------------------------"));

  const text = textAnswer.text;

  const wordCount = text
    .split(/\s+/)
    .filter((word: string) => word.length > 0).length;

  // Printing the word count result
  console.log(chalk.green("=========================================="));
  console.log(chalk.bgGreen.bold(`\tThe text contains ${wordCount} words`));
  console.log(chalk.green("=========================================="));
}

// Calling the word counter function
countWords();
