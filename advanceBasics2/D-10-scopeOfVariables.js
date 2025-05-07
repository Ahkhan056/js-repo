// discussion about the scope of variables and outcomes of using var keyword with declaring variables.

// let a=10;
// const b=20;
// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);

//  until there this is okay and print hte numbers of these variables but when we wirte these inside a scope {}..

if (true){

    let a=10;
const b=20;
var c=30;
}// here these are at local scope coz they are inside a scope {}and  limited to only this.

console.log(a); // outpu will be error coz a is defined inside loop scope and we print it  outside so it ill give an error..
console.log(b); // same as above ^
console.log(c);  // this ill print the 30 and if we declare the var c again with value 300 outside the scope also it ill pint 30 .. so we have to avoid the var keyword..


// but if we declare  a and b out side at global scope so the console ill print these values.. 

// interveiw ..

//  the global scope.. and  are diff  according to wtr to browser and in real code environment..
