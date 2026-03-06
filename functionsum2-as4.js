//write function that receives any number of args and returns their sum
const findSum=(...numbers)=>{
    return numbers.reduce((sum,el)=>sum+el);
}
let result=findSum(10,20,30)
console.log(result)
