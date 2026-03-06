/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/
 
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
          theme: "dark",
          language: "en"
    }
};
const cpyUser={...user}
cpyUser.name="bhavya"
cpyUser.preferences.theme="light"
console.log(user)
console.log(cpyUser)      
//observsation
/*as it is the shallow copy the nested property 
in the object - theme is changing for original and copied object also*/ 