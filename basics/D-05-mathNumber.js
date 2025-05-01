const number= 1223

console.log(number);

const balance = new Number(221)

console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));  // to fix use number we need enter value in method parameter specially in ecommerce site where the balance is to showed less than 2 decimal places..

const num3= 12.82

console.log(num3.toPrecision(3)); // toPrecision is used to show the number in specific decimal places. it will round the number if we enter less than the number of decimal places.

// HERE the number is rounded to 2 decimal places
 //now the output will be like  12.9  if the numbers are (3) e.g=> 122.88 then theoutput ill be 122 so it will focus on only first 3 numbers.


 const hundreds = 1000000;

console.log(hundreds.toLocaleString()); // it will show the number in local format. it will add commas in the number. so the output will be 1,000,000
console.log(hundreds.toLocaleString('en-PK')); // it will show the number in local format. it will add commas in the number. so the output will be 10,00,000

//++++++++++++++++++ Math Object ++++++++++++++++++++++++

console.log(Math); // math is itself an object. it has many methods and properties. it is used to perform mathematical operations. it is a built in object in javascript. it is not a constructor. it is a static object. we can use its methods and properties without creating an instance of it. we can use it directly.


 console.log(Math.round(13.43)); // it will round the number to the nearest integer. so the output will be 13

 console.log(Math.random()); // it will generate a random number between 0 and 1. so the output will be a random number between 0 and 1. it will not include 1. so the output will be like 0.123456789

 console.log(Math.random()*10);  // it is trick to shift the number to left and it will generate a random number between 0 and 10. so the output will be a random number between 0 and 10. it will not include 10. so the output will be like 0.123456789

 console.log(Math.floor(Math.random()*10 + 1));  
 // here the Math.floor is used to round the number to the nearest integer. so the output will be a random number between 1 and 10. it will include 1 and 10. so the output will be like 1,2,3,4,5,6,7,8,9,10

 // the need of +1 is , when we multiply the random number with 10 it will give us a number between 0 and 9.99999999999999. so when we add 1 to it, it will give us a number between 1 and 10.99999999999999. so when we round it to the nearest integer, it will give us a number between 1 and 10. so the output will be like 1,2,3,4,5,6,7,8,9,10,  there is also possibility of not adding +1 and when * with the 10 output ill be like 0.12 etc if we floor () it round to lower number it gives ud 0 so to avoid this we add +1 to it. so the output will be like 1,2,3,4,5,6,7,8,9,10..
 
 
 // if the conditions are defined  min and max value then it will be 


 const min =12
 const max=21

 console.log(Math.floor(Math.random()*(max-min+1))); //
 // till now its ok output ill be same as above but the min value is like ignored here to avoid this we add min to it also so it will be accurate result..

console.log(Math.floor(Math.random()*(max-min+1)+min)); // it will give us a random number between 12 and 21. it will include 12 and 21. so the output will be like 12,13,14,15,16,17,18,19,20,21
// the need of +1 is , when we multiply the random number with (max-min) it will give us a number between 0 and 9.99999999999999. so when we add min to it, it will give us a number between 12 and 21.99999999999999. so when we round it to the nearest integer, it will give us a number between 12 and 21. so the output will be like 12,13,14,15,16,17,18,19,20,21.. 

// the need of min-max is to get the random number between the range of min and max



 
