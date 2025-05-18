// for in loop on object 

const obj ={
    js : 'javascript',
    cpp: 'C++',
    rb : "ruby",

}
for (const key  in obj) {
    
    console.log(`${key} is shortcut for ${obj[key]}`);
    
}

// let chk this for in loop on array 

// it ill return it index or key values e.g 0 1 2 ...

const lang =['js','cpp','java','rb']
for (const key in lang) {
   //console.log(key); // output => 0 1 2 3
   
}

// to access these values we use the [key] to access it 
for (const key in lang) {
   console.log(lang[key]); 
   
}

// for of loop is iteratible on map but for in isnt working for it.

let map = new Map()

map.set('name' , 'ali')
map.set('age' , '21')
map.set('salary' , '20k')
map.set('salary' , '20k')

for (const key in map) {
    console.log(key);
    
}// empty output not showing anything.
