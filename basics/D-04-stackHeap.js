  

  // two types of memeory allocation
  // stack memory ( primitive used ) return copy and change occur in copy not orignal if we do.
  // heap memory (  non-primitive reference types used ) reference used and change occur in original.

let  name= "ali"

let anotherName= name
anotherName= "ahmed"
console.log(name  )  // ali
console.log(anotherName) // ahmed
// in stack memory
// name is stored in stack memory and anotherName is also stored in stack memory
// but anotherName is a copy of name so when we change name it does not affect anotherName
// so in stack memory we have two copies of name
// but in heap memory we have only one copy of name

let user1={
    name: "ali",
    age: 20
} // stored in heap memeory and return reference..

let user2= user1
user2.name= "ahmed"
console.log(user1.name) // ahmed
console.log(user2.name) // ahmed
// in heap memory
// user1 is stored in heap memory and user2 is also stored in heap memory
// but user2 is a reference of user1 so when we change user1 it also affect user2
// so in heap memory we have only one copy of user1 and user2 is a reference of user1
// so when we change user1 it also affect user2

