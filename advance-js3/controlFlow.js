// first of all study how if elseworks in js..



// if(2=="2"){  //output=> executed..  // it ill only check the 2 equals 2 not that the other two is the string datatype to done this we add === operator which chechk the condition and also datatype..
//     console.log("executed..");
    
// }


if(2==="2"){
    console.log("executed..2");  // output => enter same datatype numbers..!   coz here we use the (===) operator which also check te datatype  with condition
    
}else {
    console.log("enter same datatype numbers..!");
    
}

// mini program on if else =>

    const score=101;

    if (score>100){
        const power="yes can fly"
        console.log(`user can : ${power}`); //user can : yes can fly
        
    }else{
        console.log("user need max 100 point s to fly ");
        
    }
    // what f we used the var dt instead of const then the cosole outside is also printed  => console.log(`user can : ${power}`);

    // so we didnt use the var datatype in js almost..!

    // =------ shorthand ----=

    const balance=1000
   
    // if (balance>500) console.log("balance is sufficient."),console.log("test");  // this isnt a good practice at all.
    
    // online shopping cart system 

    // const isLoggedIn= true;
    // const debitCard=true;

    // if (isLoggedIn && debitCard)
    //     console.log("user allowed to buy.");
        
    // } else {
    //     console.log("not allowed to shopping.");
        
    // }

    const loggedInFromGoogle= false;
    const dloggedInFromEmail=true;

    if (loggedInFromGoogle || dloggedInFromEmail) {
        console.log("user logged in successfully.");
        
    } else {
        console.log("not allowed to log In.");
        
    }
    

    // switch in js

    const month=3
    switch (month) {
        case 1:
            console.log("january");
            
            break;
        case 2:
             console.log("feb");
            break; // if we didnt use break all code ill be executed except the default.
        case 3:
             console.log("march");
            break;
    
        default:
        console.log("default case match.");
        
            break;
    }