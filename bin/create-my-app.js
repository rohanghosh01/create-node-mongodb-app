#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import chalk from "chalk";

// Get the project name from arguments
const args = process.argv.slice(2);
const projectName = args[0];

if (!projectName) {
  console.log(chalk.red("Please specify a project name."));
  console.log("Example: npx create-my-app my-project");
  process.exit(1);
}

// Define the template path and target directory
const templatePath = path.resolve(
  new URL(".", import.meta.url).pathname,
  "../src"
);
const targetPath = path.resolve(process.cwd(), projectName);

// Copy the template files to the target directory
try {
  fs.copySync(templatePath, targetPath);
  console.log(chalk.green(`Successfully created ${projectName}`));
  console.log(`Navigate to your project: cd ${projectName}`);
  console.log("Run npm install to install dependencies.");
} catch (error) {
  console.error(chalk.red("Error creating project:"), error);
}
