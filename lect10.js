//array

const myArr = [0,1,2,3,4,5,true , "aditya"] //it is totally okay here in js 


// NOte 1  js arrays are  resizeable and are moxed array objects cannot be acceseed using arbittrary strings

console.log(myArr[0]);


//note 2 in js if we do copy operation in  arrays it performs shallow copies


//shallow copies -> of an object is copy whose properties follow same reference poitn

//deep copy mein sirf copy banti hai


//araay declaration of second type
const myHeros = ["shaktimaan" , "naagraj"]


const myArr2 = new Array(0,1,2,3,4)

myArr.push(6) //appends at the end 

// console.log(myArr)
myArr.push("Kohli")
//  console.log(myArr)


myArr.pop() ;
console.log(myArr); ///isse last eleemnt bhar nikal dega

myArr.unshift(90); //isse first mein add rr dega but dikkat hai long term mein agr 1lakh elements hue toh saare lemenets ke value shift honge time consumng operations

// myArr.shift()
// myArr.shift()
// console.log(myArr)




console.log(myArr.includes("aditya"));  //this tells that gven element is present or not

// agr index pata lagana ho toh 
// console.log(myArr.indexOf("aditya"));



const newArr = myArr.join(" ")
console.log(newArr) 

