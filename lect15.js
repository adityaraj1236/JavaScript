//functions and paramteres

const { log } = require("node:console");

function sayMyname(params) {
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}


//sayMyname(); //paranthesis mtlb execution hoga
//swithout uske refence mtlb execution nhi hoga

// function addTwoNumbers(num1 , num2) {
//     console.log(num1 + num2);
//     //in js we dont need types here we can use any datatype
// }


function addTwoNumbers(num1 , num2) {
        // console.log(num1 + num2);
    //in js we dont need types here we can use any datatype
    // let result = num1 + num2;
    // return result ;
    return (num1+num2)
}



const result = addTwoNumbers(5,3)
// console.log("Result:" result)

// addTwoNumbers(4,5);



function loginUserMessage(username){

    if (username===undefined) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in` 
}


// console.log(loginUserMessage())



function calculateCartPrice(...num1){

    //rest operator -> simple means jitna bhi items hai usko array mein daal denge
    return num1 
}


console.log(calculateCartPrice(200,300,400,500));

//ab array mein aa gyatoh aage chal krr add krr hi denge 

function calculateCartPrice2(val1 , val2 , ...num2) {
    return num2
}

console.log(calculateCartPrice2(200,300,400,500));

// as vval 1 and val2 ko ignore kr dega and map krr diya hai 200 and 300 ke saath 


const user = {
    username : "Aditya",
    price : 999
}

function handleObject(anyObject){
    console.log(anyObject);
}

handleObject(user)