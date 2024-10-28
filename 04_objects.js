// const appUser = new Object() //singleton Object
const appUser = {} //non singleton object

appUser.ID = "12sab2"
appUser.name = "Hari"
appUser.isLoggedIn = true

// console.log(appUser)

const regularUser = {
    email: "random@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Praful",
            lastName: "Giri"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {1:"one",2:"two"}
const obj2 = {3:"three",4:"four"}
const obj3 = {5:"five",6:"six"}

// const obj4 = Object.assign(obj1,obj2) // Object.assign(target,source)
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)
// console.log(obj1)

// console.log(Object.keys(appUser))
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser))

// console.log(appUser.hasOwnProperty("isLoggedIn"))

const subscription = {
    name: "Praful",
    subDuration: 30,
    method: "card"
}

// console.log(subscription.subDuration)

//Object Destructure
const {subDuration: duration} = subscription
console.log(duration)



