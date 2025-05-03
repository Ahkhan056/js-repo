const heroes_1= [ "ali", "ahmed", "sara"];

const  heroes_2=["superman","batman", "spiderman"];

//heroes_1.push(heroes_2);

//console.log(heroes_1); 
// 
//  // it deosnt merge 2 arrays but the 2nd array is added as data in array  and then in heroes_1  the heroes_2 is at index 3 and the length of heroes_1 is 4 so the 2nd arays is treated as a single element in the first array.

// console.log(heroes_1[3]); 

// it will print the 2nd array

// console.log(heroes_1[3][0]); 

// it will print the first element of the 2nd array.

// console.log(heroes_1[3][1]); 


// it will print the 2nd element of the 2nd array.

// push is pushing value in existing value of array  and concat is merging the 2 arrays and creating a new array.

const allHeroes= heroes_1.concat(heroes_2);

//console.log(allHeroes); 
// 
// // it will print the merged array of heroes_1 and heroes_2 . 


const allNewHeroes= [...heroes_1,...heroes_2]

// console.log(allNewHeroes);
// 
//  // it will print the merged array of heroes_1 and heroes_2 .

// spread operator is used to merge the arrays and it is more efficient than concat method.
// it is also used to merge objects and it is more efficient than Object.assign method.

let arr1=[1,2,3,[4,5,[5,6,7]]]  // it is a nested array rare case but it is possible.

// so to solve this we can use flat method to flatten the array.

let arr2=arr1.flat(Infinity); // it will flatten the array to any level of nesting.
console.log(arr2); // it will print the flattened array.


// in datascrapping from multiple resourses and we want to know that the incoming data is an array or not ? we use there =>

   console.log (Array.isArray("Abdullah")); // false as it is a string. 
   console.log (Array.from("Abdullah"))
    // it will convert the string to array and print the array of characters.

    console.log(Array.from({name: "ali"})); // intresting case and important to interveiw point of veiw . 
    
    // other way of converting variable sinot array is =>

        let A= 100;
        let B= 200;
        let C= 300;

        const arr3 = (Array.of(A,B,C)); // it will convert the variables into array.

        console.log(arr3); // it will print the array of variables.
    