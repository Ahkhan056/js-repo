const userEmail="a@gmail.com"

if (userEmail) {
    console.log("got email");
    
}else{
    console.log("not reached");
    
}

// falsy values =>

    // false, 0, -0, bigInt 0n, "", null, undefined,NAN.

    // truthy values=>

        // "0" , 'false' , " ", [], {}, functio(),

        // String have space isnt false like above. 

        // how to check if an array is empty.

        const arr=[]

        if (arr.length===0){
            console.log("ärray is empty");
            
        }

        // chck empty object..
        const obj={}
        if(object.keys(obj).length===0){
             console.log("object is empty.");
             
        }

// for general knowledge.

        // false==0 => true
        // false=='' => true
        // 0=='' => true

// nullish coalescing Operator (??) : null & undefined

let val;
val=12 ?? 21 // output => 12
val=null?? 21 // output => 21
val=undefined ?? 21 // output => 21
val=null?? 21 ?? 12 // output => 21 first val  he get it ill print 
console.log(val);

// ternary operator..

// condition ? true: false

const price=100

price <= 100 ? console.log("less than 100") :console.log("more than 100")

