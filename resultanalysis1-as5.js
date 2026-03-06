
/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

/*Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/
let passMarks=students.filter(min=>{
        if(min.marks>=40){
            return min
        }
        else{
            return 0}
        })
    console.log(passMarks)

let newField=students.map(student=>{
  let grade;
  if(student.marks>=90){
    grade='A'
  }
  else if(student.marks>=75){
    grade='B'
  }
  else if(student.marks>=60){
    grade='C'
  }
  else{
    grade='D'
  }
  return {...student,grade}
})
console.log(newField)

let avg=students.reduce((accumulator,student)=>{
  return accumulator+student.marks/students.length
},0)
console.log(avg)

let score=students.find((student)=>student.marks===92)
console.log(score)

let index=students.findIndex((student)=>student.name==="Kiran")
console.log(index)
