
# Task Traker CLI

A command-line interface (CLI) application built with Node.js to track and manage tasks.

## Project Setup


   - Added `#!/usr/bin/env node` at the top of index.js
   - This line tells Unix-like systems to use Node.js to execute this file

2. **Package Configuration**
   - Modified package.json to include the "bin" field:
     ```json
     {
       "bin": {
         "task-cli": "./index.js"
       }
     }
     ```
   - This configuration tells npm to create a command named `task-cli` that executes index.js

3. **Local Development Setup**
   ```bash
   npm link
   ```
   This creates a symbolic link to make the CLI command available globally during development.

### Testing the Setup
Run the following command to test if the CLI is working:
```bash
task-cli
```
You should see "CLI is working!" in the console.

## Project Structure
```
task-cli/
├── index.js          # Main entry point
├── package.json      # Project configuration
└── README.md         # Documentation
```

## Current Features
- Basic CLI setup
- Global command registration
- Command-line execution capability

## Next Steps
- Implement command-line argument handling
- Set up JSON storage for tasks
- Implement basic CRUD operations for tasks

## Contributing
This is a learning project created as part of the nodejs roadmap.sh projects.

## License
[Your chosen license]
