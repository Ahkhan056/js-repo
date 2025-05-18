// for of loop in js how it works and how easy is this loop working 

const arr=[1,2,3,4,5,6];

for (const iteration of arr) {
   // console.log(`the value of array is ${iteration}`);
    
}

// on a string for of loop

const name = "Hello world!"
for (const nam of name) {
    if (nam == " "){
       // console.log(` " " reached `);
        break;
    }
   // console.log(`value is ${nam}`);

    
}

//  loop on Map Basicallhy map are like objects and takes only unique values if we entered value twice it ill not print and jis order mai enter kya hoga key and value to oss hi order mai print hoga..

let map = new Map()

map.set('name' , 'ali')
map.set('age' , '21')
map.set('salary' , '20k')
map.set('salary' , '20k')
 // name :- ali
// age :- 21
// salary :- 20k => remove duplicate values.
// checking for of loop on this if iterate ?


//console.log(map);


for (const mapping of map) {
    //console.log(mapping);
    // output
    //  [ 'name', 'ali' ]
    // [ 'age', '21' ]
    // [ 'salary', '20k' ]

    // if we want to print it not like array and print on key and value then we use [key , value] to output it.

}

for (const [key , value] of map) {
    console.log(key , ':-', value);
    
}

// for of loop  objects  pr iterate nhi hota! => let chk

const myObj={
    name :'ali',
    age : 21,
    salary : '20k',

}

for (const obj of myObj){
    console.log(obj); // thorw error => TypeError: myObj is not iterable

    
}