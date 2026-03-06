/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


/*Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/

let trans=transactions.filter(trans=>trans.type==="credit")
console.log(trans)

let transAmount=transactions.map(trans=>{
  return trans.amount
})
console.log(transAmount)

let finalBalance=transactions.reduce((accumulator,trans)=>{
  if (trans.type==="credit"){
    return accumulator+trans.amount;
  }else{
    return accumulator-trans.amount;
  }
},0);
console.log(finalBalance)

let debit=transactions.find(trans=>trans.type==="debit")
console.log(debit)

let index=transactions.findIndex(trans=>trans.amount===10000)
console.log(index)