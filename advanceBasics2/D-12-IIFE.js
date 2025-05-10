// immediately invoked function a trick to call function easily and to avoid from the pollution of global scope and make a limited scope for function..


//1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
// 2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
// 3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
// 4.We can use parameter inside first parentheses.
// 5. To write two or multiple IIFE one should be end with semicolon ;





//declaration  =>

    //(inside function body)()  its execution => ()()..


    // we call this named IIFE !.. as func named Hello
    (function hello(){
        console.log("Hello from IIFE !");
        
    })(); //Hello from IIFE ! this ill print  the console and ; thing end its scope as after declaration of IIFE the more function didnt execute to avoid this and execute all function we add ; to end of it and thus the next function ill be executed .

    // IIFE and arrow function =>

        (()=>{
            console.log(`Hello from Arrow IIFE function !`);
        
        })();//Hello from Arrow IIFE function !

        // we also pass a variable to it as =>

            ((name)=>{
                    console.log(`Hello ${name} welcome to IIFE Arrow function !`);

            })("Abdullah!");  //Hello Abdullah! welcome to IIFE Arrow function !