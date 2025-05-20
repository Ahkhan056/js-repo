// the for each loop doesnt return any value.

// so we use there .filter method to return thre value.

const arr=["ali","sara", "nadar"];

const print = arr.forEach( (item) => {
    //console.log(item);
    return item;  // output  => undefined
}
)
// console.log(print); 

// ali
// sara
// nadar
// undefined

// to solve this isuue we use .filter () to return the item.

const arr2 = [1,2,3,4,5,6];

const print2= arr2.filter((num)=> num>2)

// console.log(print2);

// if we want to doen this work through for each loop then we go throough this.

const num =[];

arr2.forEach((item) => {
    if (item > 2){
        num.push(item);
    }
})
// console.log(num); 

// this is possible in both loop to extract specific  info from array ut we prefer .filter due to its efficiency coz in for each loop we need to add extra if else for condition chk.

//  map and filter chaining / methods chaining.

const num1 =[1,2,3,4,5];

const newNum= num1
                                .map((num)=> num * 10 )
                                .map((num)=> num+2)
                                .filter((num)=> {
                                    return num>=21;
                     })

console.log(newNum);
