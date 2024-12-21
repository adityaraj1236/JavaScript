const super_heros =  ["spiderman" , "thor" , "hulk" , "ironman" , "captainamerica"]

const super_heros2 = ["shaktimaan" , "naagraj" , "doraemon" , "dino"]

// super_heros.push(super_heros2)

// console.log(super_heros)  //actuallein yhan array ke andar array aa gay jabki ham poore strings chahte the 


// aur agr iske andar hame nikalne hain toh
// console.log(super_heros[5][1])  although not a good approach


// const allHeros = super_heros.concat(super_heros2)

// console.log(allHeros);


// console.log(super_heros) ///yaa toh puh karo yaa toh concat karo same hi aynege 


// one more easy way 

const allHeros = [...super_heros , ...super_heros2]
console.log(allHeros);
//ek ek values hame mila then we can use spread operator

const another_array =  [1,2,3,[4,5,6] , 7,8 , [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //isse poora depth dekhta hai and ho jaata hai
console.log(real_another_array);

console.log(Array.isArray("Aditya")) //ab agr isse array mein convert krna hai 

console.log(Array.from("Aditya"))


//key value pair mein nai aata 
console.log(Array.from({name:"Aditya"}))  //yhan hame specify krne  padta ki kets ka array yaa unke values ka array hoga 


let score1  = 100
let score2 = 200
let score3 = 300    
console.log((Array.of(score1,score2,score3)));
