// modern way of witriting strings in js..

const name = "ali"

const repoCount =5;

console.log(name + repoCount+ " repos") // ali5 repos
// // in this case we have to use + operator to concatenate the string and number
// 
// // // but in modern way we can use template literals
// // // template literals are enclosed with backticks
// // // and we can use ${} to insert variables in the string
// 


// moredn way of wirting and concatenate strings and its name is string interpulation ..

console.log(`my name is ${name} and my repo count is ${repoCount}`) // my name is ali and my repo count is 5;

// one is upper method to declare string and other is lower method to declare string.

const userName= new String ("ali")// this is not a primitive type but a object type
// // so we can use methods on it
// // but we can not use methods on primitive type
// // so we have to convert it to object type

console.log(userName [0]); //0

console.log(userName.__proto__); // this will give us the prototype of the object.


console.log(userName.length); // 3
// // this will give us the length of the string..

// so in new method we have multiple built-in methods to manipulate the string..

// if in user nput form there is name input and user enter "   ali   "

//we use ther 
 const name2= "   ali   "
// // so we can use trim method to remove the spaces from the start and end of the string
console.log(name2.trim()); // ali

const url= "https://www.google%20%docs.com/"

console.log(url.replace("%20%", "-")); // https://www.google-docs.com/

console.log(url.includes("google")); // true
console.log(url.startsWith("help")); // false

