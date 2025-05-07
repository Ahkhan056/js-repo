// what if we call function isnide function and dealing with their variables scope.. let`s o it..

function one (){

    const name = "abdullah";

    function two (){
        const website= "TheHaqHub"

        console.log(name);// access the abdullah due to the child property.. 

        //+++++++++++++  closure +++++++++++++++++++++
        
    }
    console.log(website);//  error coz outside the function..
    
    two();  // it will print the abdullah coz we calling it inside the function , and if we dont write it the below one function call ill not  give us any output..


}

one();// this ill not execute due to it is outside the scope of the one function.


if (ture){

    const name = "ali "

    if (name === ali){
        const website = "youtube ";

        console.log(name + website); //  execute coz it is inside the function .. 
        
    }

    console.log(website); // error coz its outside the scope and function.
    
}


console.log(name); // error coz its also outside the function..

// +++++++++++++++ basic function and expression +++++++++++++

// we declae one single basic function =>
  
    console.log(addOne(3));
    ;// if we add this above the function it ill excute .. coz it is basic function

    function addOne(num){
        return num+1;
    }

    addOne(3);// if we add this above the function it ill excute .. coz it is basic function

// +++++++++++++++++++  Hositing concept with the expression function++++++
    addTwo(3); // error coz js deal other behaviour with the basic function and expression function..

    const addTwo = function (num){
        return num+2;
    }

    addTwo(3); // it will run here but if we go it to above from the expression/ function it will not work.
