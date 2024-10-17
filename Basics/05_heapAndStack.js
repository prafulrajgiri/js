// let usermail = "user@email.com"
// let usermailTwo = usermail
// usermailTwo = "userTwo@email.com"

// console.log(usermail);
// console.log(usermailTwo);
// Stack Uses value and duplicate it incase of use and the original value doesn't change

let userFirst = {
    email: "user@email.com",
    age: 22
}
let userSecond = userFirst

userSecond.email = "usersecond@email.com"

console.log(userFirst.email)
console.log(userSecond.email)

//Heap uses reference and the manipulation of data causes the original value to change


//******* Primitive Data Type uses Stack And Non Primitve Data Type Uses Heap
