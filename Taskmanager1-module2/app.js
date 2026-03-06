//iii. app.js - Main application
 
 import {addTask,getAllTasks,completeTask} from './task.js';
 // Test your module system
 // 1. Add some tasks
 addTask("Plan trip with friends","low","2026-04-02");
 addTask("My birthday","high","2027-12-21");
// 2. Display all tasks
console.log("All tasks:",getAllTasks());
// 3. Completed both tasks
completeTask(1);
completeTask(2);
// 4. Display all tasks again
console.log("All tasks after completion:",getAllTasks());