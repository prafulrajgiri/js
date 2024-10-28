//Singleton
//Object.create

//Object literals
const user = {
    name: "Praful",
    email: "Praful@gmail.com",
    age: 19,
    "full name": "Praful Giri",
    isLoggedIn: false,
    lastLoggedin: ["Monday","Tuesday","Friday"]
}

// console.log(user.name)
// console.log(user["name"])
// console.log(user.email)

// console.log(user.full name) It cannot be written like this so it is written like
// console.log(user["full name"])
// user.email = "praful@google.com"
// console.log(user.email)
// Object.freeze(user)
// user.email= "praful.com"
// console.log(user.email);

user.greeting = function () {
 console.log(`Hello ${this.name}`)
}

console.log(user.greeting())