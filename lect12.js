// Objects 
// /singletons/  -> koi bhi ctor se vanaate hain toh singleton object banta hai 
// /non-singleton/ -> koi bhi object se vanaate hain toh non-singleton object banta hai 
// /prototype/ -> koi bhi object se vanaate hain toh prototype object banta hai

const { log } = require("node:console")

    // Object.create() ctor way of creating object
    // Object.create()  -> it is a function which is used to create object in js

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aditya", ///isse by defualt string ki trha hi smjhta key ko dete hain
    "full name": "Aditya Raj",
    "favorite language": "Javascript",
    [mySym]: "mykey1",
    "experience": 1,
    "isPro": true,
    isLoggedIn: true,
    lastLoginDays: ["Monday" , "Tuesday" , "Wednesday"], ///array bhi de skte hain
}


// console.log(JsUser);

// achah isko acceskrne ke liye 
console.log(JsUser.name); //aise hamesha ratta kaga lete hain so sirf ye hi nai hote hain neeche wwale ki trha bhi hota hai
console.log(JsUser["full name"]);//isse ham dot se access hi nii krr paayenge
console.log(JsUser["favorite language"]);//isse ham dot se access hi nii krr paayenge

console.log(JsUser[mySym])

console.log(typeof mySym);

JsUser["full name"] = "Aaditya Raj"
// Object.freeze(JsUser) //isse ham object ko frozen kr skte hain
JsUser["full name"] = "kWvCQ@example.com"

// console.log(JsUser);


// fucntios adding in JS 



JsUser.greetings = function(){
    console.log("Hello");
}

// isse this ka wo refenrce leta hai current object ka 
JsUser.greetings2 = function(){
    console.log(`Hello Js user , ${this["full name"]}` );

}

console.log(JsUser.greetings2());

// console.log(JsUser);




