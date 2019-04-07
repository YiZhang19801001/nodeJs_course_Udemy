const chalk = require("chalk");
const yargs = require("yargs");
const { getNotes } = require("./notes.js");

const command = process.argv[2].toLowerCase();

//Create add command
yargs.version(`1.1.0`);

// create add command
yargs.command({
  command: `add`,
  describe: `Add a new note`,
  handler: function() {
    console.log("Adding a new note");
  }
});

// create remove  command
yargs.command({
  command: `remove`,
  describe: `Remove a note`,
  handler: function() {
    console.log("removing the note...");
  }
});

// create list command

yargs.command({
  command: `list`,
  describe: `list all notes`,
  handler: () => {
    console.log(`listing all notes...`);
  }
});

// create read command
yargs.command({
  command: `read`,
  describe: `Read the note`,
  handler: () => {
    console.log(`reading the note...`);
  }
});

console.log(yargs.argv);
