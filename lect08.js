// Numbers and maths c
const score = 400

const balance = new Number(100)
console.log(balance)

const anotherNumber = 23.3934

console.log(anotherNumber.toPrecision(3))



const hundreds =  1000000
console.log(hundreds.toLocaleString()); //this will ehlp us in tndentifying number of zeros easily
// we can also cnvert it into indian values 
console.log(hundreds.toLocaleString('en-In'))




// *****************Maths**********************
console.log(Math)

//
console.log(Math.abs(-4));
console.log(Math.abs(-100))
console.log(Math.round(4.3));
console.log(Math.round(4.6));


//celing mtlb top toh hamesh top value hi lega 
console.log(Math.ceil(4.2));

//similearly floor mtlb neeche ki value toh wo hamesha neeche hi lega like 
console.log(Math.floor(4.7)); //4


console.log(Math.random()); //0-1

console.log(Math.floor(((Math.random()*10)+1)))



// Note agr hame min aur max define krna ho
const min = 0
const max =  6 
console.log(Math.floor(Math.random() * (max-  min +1)) + min)