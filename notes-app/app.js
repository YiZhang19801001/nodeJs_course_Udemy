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

  builder: {
    title: {
      describe: "Note title",
      demandOption: true, // arguments is required
      type: "string" // config the argument type
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("Adding a new note", argv);
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

yargs.parse(); //! Must have to call yargs to parse argv used for whole app
