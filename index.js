#!/usr/bin/env node
/*This line tells Unix-like systems "Hey, use Node.js to run this file!" */


// Import our storage utility
const storage = require('./src/utils/storage');

// Initialize storage when CLI starts
storage.initializeStorage();

// Get command and arguments
const [,, command, ...args] = process.argv;

if (!command) {
    console.log('Please provide a command:');
    console.log('  add "task description"');
    console.log('  list');
    console.log('  update <id> "new description"');
    console.log('  delete <id>');
    process.exit(1);
}
