// singleton pattrn of creating object 

const obj1=new Object();

// non singleton/literal pattern of creating object
// object and object  inside an object

const obj2= {
  name:"ali",
  isLoggedIn: false,
  fullName:{

        userName:{
                firstName: "al",
                lastName: "khan",
                
            },      
        }
}

obj1.name1="John";
obj1.id1= "123abbc";
obj1.isLoggedIn1= false;


//console.log(obj2.fullName.userName.lastName);

   // if we want to  merge 2 objects so unlike array we  dont do this => obj3={obj1, obj2}.
   
   //const obj3= Object.assign({},obj1,obj2); 
   // it will merge the 2 objects and create a new object.
   
   const obj3={...obj1,...obj2};
    // it will merge the 2 objects and create a new object.
   console.log(obj3); // it will print the merged object.

// when data arrives to us so it is in the form of array of objects =>

    const user = [
        {
            id:1,
            email:"khan:gmail.com"
        },
        {
            id:2,
            email:"khan2:gmail.com"
        },
        {
            id:3,
            email:"khan3:gmail.com"
        }
    ];

    // how we access the and print the values inside these =>

        console.log(user[1].email); // it will print the email of the 2nd object in the array.
        
console.log(Object.keys(obj1));  //  it will print the keys (name1 etc) of the object.
console.log(Object.values(obj1)); // it will print the values (name1: => jhon ) of  object.  
console.log(Object.entries(obj1)); // it will print both the keys and values as an array of arrays.( [["name1","jhon"],["id1","123abbc"] ] )
console.log(obj1.hasOwnProperty("name1")); // it will check if the object has the property or not.  
