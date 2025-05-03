// dates is a complex and built-in object in java script.
// It is used to work with dates and times.

// new updates are coming in ES6 and ES7. also on Tc39 the new updates are coming the syntax is changing. e.g=> temporal.now etc...

let myDate = new Date(); // create a new date object with the current date and time.


console.log(myDate.toDateString())

console.log(myDate.toString())

console.log(myDate.toLocaleString()) // get the current time in local format;


// console.log(date1.toLocaleString()) 
// get the current date and time in local format



// let myCreatedDate = new Date( 2025,4,3)


let myCreatedDate = new Date( "2025-05-03") // create a new date object with a specific date and time.

console.log(myCreatedDate.toString()) // get the current date and time in local format;

console.log(myCreatedDate.toLocaleString()) // get the current date and time in local format;


// also we have timeStamps in js used in making quizes and polling to know real time tracking of the data and also used in making games and other applications.

let myTimeStamp = Date.now(); // get the current date and time in milliseconds

console.log(myTimeStamp);

console.log(myCreatedDate.getTime()) // get the current date and time in milliseconds;

console.log(Date.now() /1000) // get the current date and time in seconds;
console.log(Math.floor(Date.now() /1000))// get the current date and time in seconds;but we used math.floor to get the whole number not in decimals;


let newDate = new Date();

console.log(newDate);
console.log(newDate.getFullYear()) // get the current year;
console.log(newDate.getMonth() +1) // get the current Month and +1 to get the current month in 1-12 format as in this the moth is started from 0-11;

//one method is very useful and intresting ..

newDate.toLocaleString('default',{
calendar:'modern',
weekday:'long',


})


