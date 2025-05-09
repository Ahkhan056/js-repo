// when we want on our webaite to register  new user object made for it..

const user= {
    name: "abdullah",
    price:999,

    // we want also when he pay price and login we welcome to him so make function.

    welcomeUser: function(){
        console.log(`Hello ${this.name} welcome to website, `);
        
        console.log(this);// it is used for the reference of current object and body. // 'this' refers to the current object (user). It shows the whole object details

        // for arrow function we only can use this inside the object function not inside the standalone only function..
    }

    
    
}

// user.welcomeUser();// Output: 
// Hello abdullah welcome to website, 
// { name: 'abdullah', price: 999, welcomeUser: [Function: welcomeUser] }

// Changing the user's name to "ali"
user.name = "ali"; // Updates the name property in the object

// Calling the function again to see the updated name
// user.welcomeUser(); //
// Output: 
// Hello ali welcome to website, 
// { name: 'ali', price: 999, welcomeUser: [Function: welcomeUser] }


//+++++++++++++ Arrow function  synt : ()=>{} ++++++++++++++++++

function one(){
    let name="ali"
    console.log(this.name);//undefined coz this  not working inside only function.
    
}
one()// it ill give us more and more properties like fetch global etc 

 const oneOne =function (){
    let name="ali"
    console.log(this.name);//undefined coz this  not working inside only function.
    
}
// output ill same as above function.

// now to amke this arrow function just do=>

    const one1=()=>{
        let name="ali"
        console.log(this.name);//undefined coz this  not working inside only function.
        
    }// same as above and on printing only the this keyword it will print the {}.


     const addtwo =(num1,num2)=> {
        return num1+num2;
     }
     console.log(addtwo(12,2));// output through arrow function is 14. its ok.

     //++++ other methods of declaring arrow fun.

     const hello =(num1,num2) => (num1+num2)  //  no need of writing return here..   mostly used this implicit return not using return keyword and {}

     // explicit return means returning a something from function using{return }.
     //other  ======>  retruning object through arrow function

     const object =()=> ({name:"object returned.."})  //output=>{ name: 'object returned..' }  not only working here {}
// we have to wrap it into the ()

   console.log ( object())


   // Arrow function mainly used in loop etc and react ..


   //User Object:
   
// Created a user object with name, price, and a welcomeUser method.
// welcomeUser uses this to access the object’s properties (e.g., this.name).
// Changing properties (e.g., user.name = "ali") updates the output.
// The this Keyword:
// Regular Functions:
// In object methods (like welcomeUser), this refers to the object (user).
// In standalone functions (e.g., function one()), this refers to the global object (or undefined in strict mode).
// Arrow Functions:
// Don’t have their own this. They use this from the surrounding scope (often global object).
// Avoid using this in arrow functions for object methods, as it won’t refer to the object.
// Rule: Use this in regular functions for object methods; avoid this in arrow functions.
// Arrow Functions:
// Syntax: () => {} (explicit return with return) or () => expression (implicit return).
// Implicit Return: No return or {} needed for single expressions (e.g., (num1, num2) => (num1 + num2)).
// Returning Objects: Wrap objects in () (e.g., () => ({ name: "value" })).
// Used in loops, callbacks, and React for concise code.
// Limitation: No own this, so not good for object methods.
// Explicit vs. Implicit Return:
// Explicit: Use return inside {} (e.g., () => { return num1 + num2; }).
// Implicit: No return or {}, just the expression (e.g., () => (num1 + num2)).
// Key Differences: Regular vs. Arrow Functions
// Feature	Regular Function	Arrow Function
// Syntax	function() {} or function name() {}	() => {} or () => expression
// this	Own this (object or global)	No own this, uses surrounding scope
// Use in Objects	Good for methods (uses object’s this)	Bad for methods (wrong this)
// Return	Needs return for explicit return	Supports implicit return (no return/{})
// Common Use	Object methods, general-purpose	Loops, callbacks, React, concise code
// Why This Matters:
// Use regular functions for object methods or when you need this to refer to the object.
// Use arrow functions for short, standalone tasks (e.g., loops, React) where this isn’t needed.
// Arrow functions are modern and concise but tricky with this, so choose wisely!