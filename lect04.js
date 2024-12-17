// comparison operators

// console.log(2>1) ;
// console.log(2>=1);
// console.log(2<1);




// but the problem arrives when comapring two different datatypes 
// console.log("2">1);
// console.log("02">1);
// while always comparing ensuring that always datatpyes for the twos are same 

console.log(null>0);
console.log(null==0);
console.log(null>=0); //ye true krta hai because 

// comaprison operator treats null as 0 so in third null >=0  gives true 
// wherreas equality check like second one gives false as it works differnectly 



// console.log(undefined==0);
// console.log(undefined >=0);
// console.log(undefined<0);  yhan ahmesha teno men ffalse hi dega

// Note avoid all the abve type of comparisons 

// === 
console.log("2" === 2) ;// yha strict chek hai data type bhi chekc krta hai yhan converion nai hota hai 


