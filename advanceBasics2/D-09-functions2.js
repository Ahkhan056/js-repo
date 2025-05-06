// functions working with arrays and objects

// there is a very common case in e-commerce apps etc user add multiple items in cart and we have to calculate its price and reutn it now how we know that how many parameters should pass to that calculateCartPrice function to tackle this we are here.


//  function calculateCartPrice(num1){

//      return num1;
//  } 
// // 
// // //  here is issue. how many parameters ?.

// // tacklnig this issue =>>


//  console.log(calculateCartPrice(12,22,333,1323));  //12 output 
// // // this will only print the 12 coz only 1 para,eter goes to function.. 



function calculateCartPrice(...num1){

    return num1;
}
// that ... works names as rest and spread operator in js..
console.log(calculateCartPrice(12,22,333,1323));   
//[ 12, 22, 333, 1323 ] output 
// here it will console alll values due to rest ... operator..

function calculateCartPrice(val1,val2,  ...num1){

    return num1;
}
console.log(calculateCartPrice(12,22,333,1323));// output ill be 333,1323  coz 12 and 22 goes to val1 and val2 and we didnt return that..


//++++++++++++++     deal with objects =>  ++++++++++++++++++


const user={
    name: "ali",
price:200 //UserName is ali and total shopping is undefined

    //prices:200  //UserName is ali and total shopping is undefined here we had to handle the isues of object type etc.. this is how people loves typeScript and here we hve ti add if else for these ..
}

function handleObject(object){
    console.log(`UserName is ${object.name} and total shopping is ${object.price}`);
    
}

// handleObject(user);


handleObject({
    name:"hello",
    price:300
}); // we also pass entire object in this like 



//++++++++++++++     deal with arrays =>  ++++++++++++++++++
const newArr1=[200,400,450,544];

function returnArr(array){
  return array[2]; 
  // output is 450 coz we returning the value on index of 2.
}

console.log(returnArr(newArr1));  // output is 450 coz we returning the value on index of 2.
