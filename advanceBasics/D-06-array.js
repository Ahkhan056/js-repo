// arrays are objects

const myArray=[0,1,2,3,4,5];

 

let heroes=['superman','batman','spiderman'];

// other type of declaration array
const arr2=new Array(0,1,2,3,4,5); // array constructor   

// console.log(arr2[2]); // 3



// array methods 
// push() method add values to existing array..

// arr2.push(6,7,8,9,10); // add values to the end of the array

// console.log(arr2);


// pop is used to remove the last element of the array arr2.pop() removes the 10 from arr2 ..

// unshift() is used to add values to the beginning of the array arr2.unshift(9) adds 9 to the beginning of the array arr2..

// shift()  no argumented method is used to remove the first element of the array arr2.shift() removes the 1 from arr2..

// console.log(arr2.includes(8)); // true
// console.log(arr2.includes(11)); // false



// console.log(arr2.includes(11)); // false  this is used to check if the value is present in the array or not.

// console.log(arr2.indexOf(8)); // 7
// console.log(arr2.indexOf(11)); // -1  this is used to check the index of the value in the array or not.

const newarr = arr2.join(' '); // this is used to join the array elements with the given string
// console.log(newarr); // 1 2 3 4 5 6 7 8 9
// console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// the output of both is  same but the newarr changes the typeof the array to string and arr2 remains the same.

// slice() method is used to slice the array from the given index to the end of the array


// const slicedarr = arr2.slice(1,4); // this is used to slice the array from the given index to the end of the array  1 is included and 4 is excluded.


// console.log(slicedarr); // [3, 4, 5, 6, 7, 8, 9]
// // splice() method is used to slice the array from the given index to the end of the array and also remove the elements from the array


// const splicedarr = arr2.splice(2); // this is used to slice the array from the given index to the end of the array and also remove the elements from the array


// console.log(splicedarr); // [3, 4, 5, 6, 7, 8, 9]


// console.log(arr2); // [1, 2]


// // interveiw question difference  bw  slice and splice : splice is used to remove the elements from the array and mainipulate our orignal array  and slice is used to slice the array from the given index to the end of the array  not manipulate the original array.

console.log( "A ", arr2);

const myn1=arr2.slice(1,4); // this is used to slice the array from the given index to the end of the array  1 is included and 4 is excluded.


console.log(myn1);
console.log("B " , arr2);

const myn2=arr2.splice(1,4); // this is used to slice the array from the given index to the end of the array and also remove the elements from the array.

console.log(myn2);

console.log("C", arr2); 



//A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]
// B  [ 0, 1, 2, 3, 4, 5 ]   slice result is not changing the original array
// [ 1, 2, 3, 4 ]  splice result is changing the original array slpice (1,4) means start from 1 and remove 4 elements from the array
// C [ 0, 5 ]  changed teh whole array removed the elements 1,4 from the array  ..

// so the main differnece is that slice only slices the array and gives us the output we want to extract from array without changing the orignal array  but splice gives us the output we want to extract from array and also changes the original array by removing the elements from the array.

