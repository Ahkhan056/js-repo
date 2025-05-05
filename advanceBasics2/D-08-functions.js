// a function is a piece of code that we write once and use where needed easily..

// declaring function in js is =>

    function hello(){
        console.log("Hello World!");
        
    }

//     hello()


    // but there is an issue with when we make function of add two numbers then maybe these cases come as in parameters the variables dont want any datatype that accept it so thats why there need to use extra if else to conclude it 

    // E.g=>

        function add(num1, num2){

            // console.log(num1+num2);

            //  if we store it in a result var then type of this ill be undefined coz of no vales only names even the values are coming .

            // instead we do this =>

                return num1+num2;  // here the type of is number. 

            
        }



        add(22,34);  // 56

        add("22",34); //2234

        add(null,34); 

        // these are some issues with this to overcoem these we need to add extra if else for proper working..

        // we also store result in the form of variable like =>

    const result= add(2,3);

    // console.log( typeof result); // undefined
    

    // but when we print the typeof result it gives us the undefined there we discuss need of return and console property ..

      // write a small function to greet new user who just logged in =>

        function greet(username){
            if( !username ){  //username===undefined // alternative  => !username
               
                return  "please enter name !"
                
             }
            return` Welcome ${username} you just logged In.`
        }
          

        // if (!username) {
        //     return "please enter name !";  => output only this message
        // }

        // if (!username) {
        //     console.log("please enter name !");
        //     return; // Returns undefined
        // }   => returns message with the undefined thats why we use the returns directly..

         //   retuen at 54 after this block the code doesnt work in function so we add return to not go to other part of code after meeting this condition .

        // greet("abdullah") 
        
        // not works coz we only return it not print it to do this we need to console

        // console.log(greet("abdullah"));  
        
        // Welcome abdullah you just logged In.

        // what if we dont give anything in the parameter  then greet ();  output=> Welcome undefined you just logged In.

        // to tackel this issue we use if else 


        console.log(greet());
        



        