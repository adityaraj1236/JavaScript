// objecrs with helpof ctor and singleton 

const tinderUser = new Object(); //empty object
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Aditya";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser =  {
    email: "MjBxH@example.com",
    fullname: {
        userfullname: {
            firstname: "Aditya",
            lastname: "Raj"
        }
    }
}


// console.log(regularUser.fullname?.userfullname.firstname);


const obj1 =  {1: "a" , 2: "b"};
const obj2 =  {3: "a" , 4: "b" , 5: "c"};

// const obj3 =  {...obj1 , ...obj2}

// let obj3 =  Object.assign( obj1 , obj2) //sirf aise krenge toh saare values obj1 mein storeed ho jaayerneg 

// ab dono ko ek new mein krne ke liye 
 obj3 = Object.assign( {} , obj1 , obj2)
console.log(obj3);


const users =  [ 
    {
        id:1 , 
        name: "Aditya"
    },
    {
        id:2 , 
        name: "Raj"
    },
    {
        id:3 , 
        name: "Priya"
    }
]


users[1].email = "MjBxH@example.com"
users[1].upi = "aditya@ybl"
console.log(users);

console.log(Object.keys(tinderUser)) //sirf obejct.keys se nss ye pata chlta ki ksis pobejct ke keys chahuey ab ksike liye uss object ka naam dena hota hai 

// console.log(Object.entries(tinderUser))

// hrr ek key vaues array ke form mein aane lagte hain 7

console.log(tinderUser.hasOwnProperty("isLoggedIn")) //this will return true or false;  
console.log(tinderUser.hasOwnProperty("isLoggedIn1")) //this will return true or false;;




