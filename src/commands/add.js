const storage = require('../utils/storage');

function add(description) {
    if (!description) {
        console.log('Please provide a task description');
        return;
    }

    const tasks = storage.readTasks();

    const newTask = {
        id: tasks.length + 1,
        description: description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    tasks.push(newTask);
    storage.saveTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`);
}

module.exports = add;
