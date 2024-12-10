const fs = require('fs');
const path = require('path');

/*
 * DEFINE PATHS
 We are telling Node.js where to store our data and tasks.json file

*/
const DATA_DIR = path.join(__dirname, '../../data')
const TASKS_FILE = path.join(DATA_DIR, 'tasks.json')


/*
 *INITIALIZE STORAGE SYSTEM
 *CREATE DATA DIRECTORY AND TASKS.JSON FILE IF THEY DO NOT EXIST
*/
const initializeStorage = () => {
    try{
        //check if dir exist, if not create it
        if(!fs.existsSync(DATA_DIR)){
            fs.mkdirSync(DATA_DIR)
        }

        // check if task.json exists else create it
        if(!fs.existsSync(TASKS_FILE)){
                const initialData ={
                    tasks: []
                };

              fs.writeFileSync(TASKS_FILE, JSON.stringify(initialData, null,2))
        }


    }catch(error){
        console.log('Error initializing storage:', error.message);
        process.exit(1)// exit if we can't initialize storage
    }

}

/**
* WRITE FUNCTION TO READ ALL TASKS FROM STORAGE
* @returns {Array} Aray of tasks
*/

const readTasks =()=>{
    try{
        const data =fs.readFileSync(TASKS_FILE, 'utf8');
        return JSON.parse(data).tasks;
    } catch(error){
        console.error('Error reading tasks:', error.message)
        return [];
    }
}

/**
 * SAVE TASKS TO STORAGE
 * @param {Array} tasks Array of tasks to save
 */

 const saveTasks = (tasks) => {
    try{
        const data ={
            tasks: tasks
        };
        fs.writeFileSync(TASKS_FILE, JSON.stringify(data, null, 2));
    } catch(error){
        console.error('Error saving tasks, error.message')
    }
 }

 //functions to use in other files

 module.exports = {
  initializeStorage,
    readTasks,
    saveTasks
 };
