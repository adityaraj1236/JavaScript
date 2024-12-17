// Datatypes Symmary.jsn

//primitve datatypes ->  they are the call by values inke copy milte hain naa ki inmke addreses prr change hote han 
        // 1) string
        //  2) Boolean
        //  3) Number 
        //  4) null
        //  5) undefined
        //  6) Symbol
        //  7) BigInt






// Non Primitive or reference datatypes
// they are clal by refernece  mtlb kuch bhi change krenge wo directly uss memory mein change hoga 
// Array , Objects , Fucntion



// Note :
// In a dynamically typed language like JavaScript:

// Data types are determined at runtime, not during compilation.
// A variable can hold any type of value, and its type can change during execution.

const score = 100
console.log(score)

const isLoggedIn =  false 
const outSideTemp = null
let userEmail //undefined



const id = Symbol('123')
const anotherId = Symbol('123')

//symbol ka kaam hi ye h i hota hai odno ka number bhi same hai firr bhi alaga hi hoga wo 

console.log(id === anotherId)


const bigNumber = 2189328981920872210823n



// why arrays are non primitve
const heros = ["shaktimaan" ,  "naagraj" , "doga"];


// objects 
 let myObj = {
    name: "Aditya",
    age:24,
}


//funcitons 
const myFunction  = function(){
    console.log("Hello World")
}

console.log(typeof outSideTemp) //object


// Notes :
// Type of Val  ----> Result 
// Undefined   "undefined"
// Null         "object"
// Boolean       "boolean"
// Number        "number"
// String          "string"
// Object(native and doesnot implement [[Call]]) "function"
// Object (host and doesn not implement [[Call]])          "booleans" , "number " or "string"
//fucntion   fucntion obejct