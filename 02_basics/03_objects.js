// Singleton
// Object.create()



// Object litarals

const mySym = Symbol("key1");

const JsUser = {
    name : "Musab Khan",
    age : 18,
    location : "Dubai",
    email : "musabkhalid@gmail.com",
    isLoggedIn : false,
    lastLogginDays : ["Monday", "Tuesday"],
    [mySym] : "My key one."
}

// console.log(JsUser[mySym]);


JsUser.greeting = function () {
    console.log("Hello JS user");
    return 0
};


console.log(JsUser.greeting());
