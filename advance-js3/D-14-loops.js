// the one and basic loop is for loop.

for (let i=1; i<=10;i++){
    if (i==5){
        console.log(`${i} is the best number! `);
        
    }

    console.log(i);
    
}

// nested for loop 

for ( let i=1 ; i<=5 ; i++){
    console.log(`Value of outer Loop ${i}`)

    for (let j=1; j<=5 ;j++){
         //console.log(`value of inner Loop ${j} `);
        // console.log(`value of inner Loop ${j} and value of outer Loop is ${i}`);

        console.log(`${i} * ${j} = `+i*j);
        
        
        
    } //Value of outer Loop 1
    // value of inner Loop 1 
    // value of inner Loop 1 and value of outer Loop is 1
    // value of inner Loop 2 
    // value of inner Loop 2 and value of outer Loop is 1
    // value of inner Loop 3 
    // value of inner Loop 3 and value of outer Loop is 1
    // value of inner Loop 4 
    // value of inner Loop 4 and value of outer Loop is 1
    // value of inner Loop 5 
    // value of inner Loop 5 and value of outer Loop is 1
    
}

//  Loop on Array 

const arr= ["ali","sara","nadar"];

for (let i=0 ; i<arr.length ; i++){
    console.log(arr[i]);
    
}
// break and continue keywords in loop.

for (let i=1; i <=5 ;i++){
    if (i==4){
        console.log(`4 is detected`);
        break; // this ill break the loop an dand loop execution ends here.
        
       // continue;// this ill continue the loop but without printing the value of four it is like chalo ik chance deta hun agay challo!
    }
    console.log(`valur of i is ${i}`)
    
}