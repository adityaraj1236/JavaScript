// Memory allocation


// Stack memory   (Primitive)

// Heap memory   (Non Primitve)



let myYoutubeName  = "adityarajdotcom"

let anotherName =  myYoutubeName
console.log(anotherName)





//heap memory geenration changes in reference as it takes form refernece 

let userOne =  {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo =  userOne


userTwo.email =  "aditya@google.com"

console.log(userOne.email)
console.log(userTwo.email)