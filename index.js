#!/usr/bin/env node

// Importing the Command class from Commander.js library
import { Command } from "commander";
import { getQuote } from "./commands/get-quote.js";

// Creating an instance of the Command class
const program = new Command();

// Setting the name and description of the CLI tool
program
  .name("quotivate")
  .description(
    "Receive random inspirational or humorous quotes in the terminal."
  )
  .version("1.0.0");

program.action(getQuote);

// Parsing the command-line arguments and executing the corresponding actions
program.parse();
