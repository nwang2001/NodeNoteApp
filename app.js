// validates and sanitizes strings 
const validator = require('validator')
// chalk customizes how text will be displayed to the console
const chalk = require('chalk')
// build interactive command line tools, by parsing arguments and generating an elegant user interface
const yargs = require('yargs')
const notes = require('./notes.js')

// yargs version
yargs.version('17.7.2')

// creates an add command to add notes with a note title and body
yargs.command({
    command: 'add',            
    // description
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            // makes the title required to input a new note
            demandOption: true,
            // type of input needs to be string
            type: 'string'
        },
        body: {
            describe: 'Note body',
            // makes the note body required to input a new note
            demandOption: true,
            type: 'string'
        }
    },

    // argv is an array that contains all the arguments provided
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// creates an remove command to remove notes given the note title
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            // makes the title required to be able to remove the targetted note
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// creates a list command that will list all your notes
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// creates a read command that will display the note title and body
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()