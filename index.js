#!/usr/bin/env node
/*This line tells Unix-like systems "Hey, use Node.js to run this file!" */


console.log('Node.js executable:', process.argv[0]);
console.log('Your script path:', process.argv[1]);
console.log('Rest of arguments:', process.argv.slice(2));
