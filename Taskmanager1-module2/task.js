import {validateTitle,validatePriority,validateDueDate} from './validator.js';
const tasks=[];

 // 1. Add new task function 
 function addTask(title,priority,dueDate) {
    if(validateTitle(title)||validatePriority(priority)||validateDueDate(dueDate)){
        return "Error:"+(validateTitle(title)||validatePriority(priority)||validateDueDate(dueDate));
    }else{
        const newTask={
           id:tasks.length+1,
    title,
    priority,
    dueDate,
    completed:false
  };
  tasks.push(newTask);
  return "Task added successfully";
 }
 }

// 2. Get all tasks function
  function getAllTasks(){
     return tasks;
   }

// 3. Mark task as complete 
  function completeTask(taskId){
    const task=tasks.find(task=>task.id===taskId);
    if(task){
      task.completed=true;
      return "Task marked is complete";
    }else{
      return "Task not found";
    }
  } 
  
export{addTask,getAllTasks,completeTask};
