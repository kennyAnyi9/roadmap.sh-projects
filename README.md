# Task CLI

A command-line interface (CLI) application built with Node.js to help track and manage tasks. This CLI tool allows users to add, update, delete, and track the status of their tasks through simple command-line commands.

## Project Overview

Task CLI stores your tasks in a JSON file and provides various commands to manage your to-do list effectively. Each task includes important metadata like creation date, last updated date, and current status.

### Features

- Add new tasks
- Update existing tasks
- Delete tasks
- Mark tasks as in-progress or done
- List all tasks
- Filter tasks by status (todo, in-progress, done)

### Task Properties

Each task in the system contains the following properties:

- `id`: Unique identifier for the task
- `description`: Task description
- `status`: Current status (todo, in-progress, done)
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

## Technical Setup

### Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)
- Basic understanding of command-line operations

### Project Structure

```
task-cli/
├── index.js        # Main entry point
├── package.json    # Project configuration
└── tasks.json     # Task storage file (created automatically)
```

### Installation & Setup

1. Clone the repository:
```bash
git clone [your-repo-url]
cd task-cli
```

2. Install dependencies:
```bash
npm install
```

3. Link the package locally:
```bash
npm link
```

### Development Setup Steps

1. **Project Initialization**
   ```bash
   mkdir task-cli
   cd task-cli
   npm init
   ```

2. **Main File Setup**
   - Created `index.js` with shebang for Node.js execution:
   ```javascript
   #!/usr/bin/env node
   ```

3. **Package Configuration**
   - Added bin field in package.json:
   ```json
   {
     "bin": {
       "task-cli": "./index.js"
     }
   }
   ```

4. **Local Development Link**
   ```bash
   npm link
   ```

## Usage

Once installed, you can use the following commands:

```bash
# Adding a new task
task-cli add "Buy groceries"

# Updating a task
task-cli update 1 "Buy groceries and cook dinner"

# Deleting a task
task-cli delete 1

# Marking task status
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing tasks
task-cli list
task-cli list done
task-cli list todo
task-cli list in-progress
```

## Project Architecture

### Command Line Processing
- Uses Node.js process.argv for command-line argument parsing
- Implements command pattern for different operations

### Data Storage
- Utilizes local JSON file for persistent storage
- Implements CRUD operations for task management
- Handles file system operations using Node.js fs module

## Technical Details

### Key Components

1. **Command Line Interface**
   - Shebang implementation (`#!/usr/bin/env node`)
   - Global command registration via npm link
   - Command-line argument parsing

2. **File System Operations**
   - JSON file handling
   - Persistent storage implementation
   - Error handling for file operations

3. **Data Management**
   - Task CRUD operations
   - Status management
   - Unique ID generation
   - Timestamp handling

## Contributing

Feel free to contribute to this project! Please follow these steps:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Current Status

Project is currently in development phase. Initial setup and basic CLI structure have been implemented.

### Completed Features
- Basic project structure
- CLI command registration
- Development environment setup

### Upcoming Features
- Task management implementation
- Status tracking
- List filtering
- Error handling
- Input validation

---
**Note**: This is a learning project created as part of the roadmap.sh Node.js learning path.
