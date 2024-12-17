// string 

const name = "Aditya"
const repoCount = 50

// console.log(name + repoCount ) utdated syntax



// string  interpolation 

// this mean that whrrever we want to inject string there we can do that
console.log(`Hello my name is ${name.toUpperCase()} and my repoCount is ${repoCount}`);
//best relaible way for this 




// new way of representing gameName
const gameName =  new String('adityaRajPriya')

console.log(gameName[0]);

// ike poore prototypes
// console.log(gameName.__proto__);


//console.log(gameName.length) //isse lenght pata chalta string ka

// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(2))


console.log(gameName.indexOf('t')) //isse index pata chatla kon se index prr hai 


// some of the other methods 

const newString =  gameName.substring(0,4);
console.log(newString);


const anotherString  =  gameName.slice(0,4)
console.log(anotherString);
//interstng art of slice 
const anotherSlicething =  gameName.slice(-10,4)
console.log(anotherSlicething)

const newstringOne = "     Aditya    "
console.log(newstringOne.trim()); //thsi remoces starting and ending spaces


const url = "https://facebook.com/hitesh%20choudhary"

console.log(url.replace('%20'  ,  '-'))

console.log(url.includes('sundari'))



//in sgrng i also want to cnvert ito array based upon ceratin thing like space semi colon and other
// '


console.log(gameName.split('-'))//base dupin that it will return an array
