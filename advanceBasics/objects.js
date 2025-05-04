// having tow ways of declaring objects
// 1. Object Literal  =>  not making singleton  > for interveiw purpose

// 2. Object Constructor=>   creating object from constructor thne this make it singleton  ...

//literals.. 
let jsUser=  {}

// making through constructor and which make an object singleton looks like..

Object.create

//litrals.
jsUser={
    name:"ali",
    "fullName":"ali khan",
    age: 20,
    location:"hello",
    isLoggedIn:true,
    email:"ali@gmail.com",
    lastLoginDays:["monday","Friday"],


}

// many people use the way of getting the values of object through method which is not a good way =>
    // coz if we declare a value in object like this "name":"ali" then this isnt accessible by the dot(.) operator ..
   console.log (jsUser.name)
   console.log( jsUser.age)

   //other method of declaring and accessing the object items ..
   console.log(jsUser["fullName"]);

   // interview question: what if they say declare a symbol and the add it to the object then print it..

   const mySym= Symbol("key1");
   // now we may add it like  mySym: "myKey1" => but when we print it it is ok  until we check the typeof mySym.. it will print the Sym => String coz when we add anything in the objetc it treats it as a string..
   
   // so the correct way of adding a symbol in the object is like this.. => [mySym]: "myKey1" => this will add the symbol in the object and when we print it it will print the symbol..

jsUser={
    name:"ali",
    "fullName":"ali khan",
    age: 20,
    location:"hello",
    isLoggedIn:true,
    email:"ali@gmail.com",
    lastLoginDays:["monday","Friday"],
    [mySym]: "myKey1",
}
console.log(jsUser[mySym]); // this will print the symbol value

//if we want to override the valur of object the siply => 
jsUser.name= "ali Kh";
console.log(jsUser.name); // this will print the new value of name
// and if we want to freeze the object like not everybody change the value of object then we can use the freeze method => Object.freeze(jsUser) => this will make the object immutable and no one can change the value of object..

// Object.freeze(jsUser) 
// this will make the object immutable and no one can change the value of object..

jsUser.name = "ali khan"; // this will not change the value of name
console.log(jsUser.name); // this will print the old value of name

console.log(jsUser);

// if we want to make the object mutable again then we can use the seal method => Object.seal(jsUser) => this will make the object mutable and no one can change the value of object..

// Object.seal(jsUser)
 // this will make the object mutable and no one can change the value of object..

// if we want to add a function to the object then we can do it like this =>

    jsUser.greetings= function(){
        console.log("hello jsUser");
       
    }

    jsUser.greetings2= function(){
        console.log(`hello jsUser,${this.name}`);
       
    }

    console.log(jsUser.greetings);  // it will print  [Function (anonymous)]

    console.log(jsUser.greetings());



    
    



   
