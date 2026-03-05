/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.*/

//Test data:
const marks = [78, 92, 35, 88, 40, 67];

/*Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/

    let passMarks=marks.filter((marks)=>marks>=40)
    console.log(passMarks)

    let graceMarks=marks.map((marks)=>marks+5)
    console.log(graceMarks)

    let highestMark=marks.reduce((accumulator,mark)=>accumulator>mark?accumulator:mark)
    console.log(highestMark)

    let m=marks.find((mark)=>mark<40)
    console.log(m)

    let index=marks.findIndex((mark)=>mark===92)
    console.log(index)