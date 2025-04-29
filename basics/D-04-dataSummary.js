// two types of datatype in js

// primitive adn non primitive ..


//interview : primitive : non-primitive : is categorized on this ..
// this  division is  based on how we access and store data in memeory.


 // call by  value or call by reference..

// primitive  when we call it it is call by value and when we call it it give us the copy and also when some change in it the change occur in copy..
// 
//   have 7 types :
// string .. 
// number 
// boolean 
// null .. empty non zero e.g> when we call temprature form server and it doesnt  get it it retun 0 so there null nedded coz 0 is a value and null isnt..
// undefined  .. initialized but not assigned any value yet ..

// symbol .. used to identify uniquely an entity used in advance js .. 
// e.g > when we want something to be unique even its ids are same then we wrap it in symbol..
// bigInt .. use to handle data above  2 power 53

// Non-primitive :  datatype is all returned object .. function return type is object function..

//Array :
// object:  > to master js master objects and browser web events so youre master of js..
// function:  

// symbol : 
// 
const id= Symbol('123');

const anotherId = Symbol('123');

console.log(id===anotherId);

// arrays 
const names= ["ali", "ahamd" , "khan"];

let obj={
    name : "ali",
    age:22,
}

// functions :

const myFunction= function(){
    console.log("hello from function ...");
    
} 

const bigInt= 4523526473573464574n

console.log(typeof bigInt);

