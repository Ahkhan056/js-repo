// de structuring the  values in objects and arrays

const course ={

    courseName:"javascript",
    cPrice:999,
    cDuration: "3-Months",

}

course.courseName // used to access the value of courseName but not efficient in large objects.

// ++++++++++     DESTRUCTURING +++++++++++++++

// alternative way to access the values in objects is by using destructuring.

// const {courseName}=course; 
// one way to destructure the values in objects is by using the object name and the key name.

// console.log(courseName); // javascript 

const {courseName:instructor}=course; // this way if the  variable name is too long or difficult then we change it to a shorter name.(instructor is the new name for courseName)

console.log(instructor); // javascript

//++++++++++ APIs +++++++++++++++

// APIs are used to get data from the server.  apna kaam kisi or ky sar pr dalna ya apna kam server sy krwana.

// E.g =>  resturan tpr jaty hai or kehty hai samosa khana hai  bs amy fikar nhi hai kay aalo kha sy ayega ir banega kesy hamy tyar samosa serve karta hai resturant .

// pehly values server sy xml ky form mai ati thi magar ab JSON ki form mai aati hai.

//JSON is like object but dont have any name .

// {

//     "name": "abdullah ",
//     "coursename":"java",
// }

// how to use fetch method   convert the api into object and extract the values.


// every time may not our api be in the format of object maybe it is in the array format then we go to JSon format and restructure it and study it for uderstanding like undestanding the randomusergenrator.


// all api are Json format like this isnt limited to only js full api industry format is JSON .



