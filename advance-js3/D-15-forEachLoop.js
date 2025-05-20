//  mostly used on arrays one is map and other is this loop

const arr = ["js", "cpp", "java"];
// for each loop is array its own property also we call it theough array name and . !

arr.forEach((val) => {
  //console.log(val);
}); // here for each need a call back function so we add here an arrow function without giving him name coz thats the syntx..

// we also do it through the normal function and dont give the function anme there also..

// we also perform thius on declaring a new function and call it in the callback function only reference E.g fuc name only.

function neww(item) {
  //console.log(item);
}
arr.forEach(neww);

// we can also print  the index and full array thriugh the call back fun (item , index , arr).

// object inside the array hoe to acces the object specific values..

const array2=[
    {
        name : 'ali',
        age : 21,
        salary : '20k',
        
    },
    {
        name : 'sara',
        age : 20,
        salary : '21k',

    },
    {
        name : 'khan',
        age : 22,
        salary : '23k',

    }
];

array2.forEach((item , index)=> {
    console.log(`Name is ${item.name} and salary is ${item.salary}`);
   
})// so here we exract values from the array object specifically.