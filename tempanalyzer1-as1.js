const temperatures=[32,35,28,40,38,30,42];

//filter temperatures above 35

let temp1=temperatures.filter((temp)=>temp>35)
console.log(temp1)

//map convert celsius to fahrenheit

let fahrenheit=temperatures.map((temp)=>(temp*9/5)+32)
console.log(fahrenheit)

//reduce avg temperatures

let average=temperatures.reduce((accumulator,temp)=>accumulator+temp/temperatures.length)
console.log(average)

//find first temp above 40

let temp=temperatures.find((temp)=>temp>40)
console.log(temp)

//find index of 28

let index=temperatures.findIndex((temp)=>temp===28)
console.log(index)