//Validate task title
 function validateTitle(title){
    if(!title){
        return "title should not be empty";
    }if(title.length<3){
        return "title should contain 3 letters";
    }else{
        return null;
    }
 } 
//Validate priority 
function validatePriority(priority){
     const validPriorities=["low","medium","high"];
      return validPriorities.includes(priority.toLowerCase())?null:"priority must be low or medium or high";
      } 
//Validate due date 
function validateDueDate(date){ 
    const dueDate=new Date(date);
    const now=new Date();
    return dueDate>now?null:"due date must be a future date";
}
export{validateTitle,validatePriority,validateDueDate };