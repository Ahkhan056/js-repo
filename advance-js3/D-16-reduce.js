// reduce is a method use to add numbers of array mainly used in shopping cart etc..

// // reduce() loops through an array to combine all elements into one value.
// // - accumulator: Keeps track of the running result.
// // - currentValue: The current item in the array being processed.
// // - initialValue: Starting point for the accumulator (optional but useful).
// // Why initialValue? It makes results reliable, prevents errors with empty arrays, and sets the starting value/type.

// array.reduce((accumulator, currentValue) => {
//   // Code to combine accumulator with currentValue
// }, initialValue);

const num=[1,2,3,4];

const newNum=num.reduce((accumulator , current)=> accumulator + current, 0)

console.log(newNum);  // 10

// other method 

const total= num.reduce( function (acc , curr) {
    console.log(`acc value is ${acc} and the current value is ${curr} `);
    return acc+curr;

    
} ,0  ) // => 0 is the intial value goes to accumulator.

 console.log(total); //acc value is 0 and the current value is 1 
// acc value is 1 and the current value is 2 
// acc value is 3 and the current value is 3 
// acc value is 6 and the current value is 4 
// 10
 
