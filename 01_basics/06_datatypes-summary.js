// Primitive

// 7 types : String, Number, Boolean, null, undifined, Symbol, BigInt.


// Refference | Non-primitive

// Array, Object, Fucntions.

const isLoggedIn = true;
const outsideTemp = null;   

let userEmail;

const id = Symbol(123);

// console.log(id);


// ------------------------------------------------------------------------------------------------------------------


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "chaiaurcode"

let anotherName = "myyoutubename"

// console.log(anotherName);

let user = {
    email : "musabkhalid16@gmail.com",
    upi : "03003629983"
}

let user2 = user;

user.email = 12345

console.log(user.email);
console.log(user2.email);
