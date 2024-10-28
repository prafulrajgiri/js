//  function greetUser(){
//     console.log("Hello")
//  }

//  greetUser()

// function greetUser(username){
//     return `Hello ${username} `
// }

// console.log(greetUser("Praful"))

// function greetUser(username = "User"){
//     return `Hello ${username} `
// }

// console.log(greetUser("Praful"))

function addNumber(num1,num2){
    return num1 + num2
}

const result = addNumber(432,21)
// console.log(result)

function addCartSum(...value){
    let sum = null
    for (let i = 0; i < value.length; i++) {
         sum = value[i] + sum
        }
    console.log("Total:",sum)
}

// addCartSum(123,400,980,765,433,234,)

// function spreadTest(num1,num2,...value){
//     console.log(num1,num2,value)
// }
// spreadTest(2,3,4,5,6)

const userData = {
    name: "Praful",
    subscription: "Premium",
    duration: 45
}

function userInfo(objectPass){
    console.log(`${objectPass.name}, You are using ${objectPass.subscription} version and the duration left is ${objectPass.duration} days`)
}
// userInfo(userData)
// userInfo({name:"ram",subscription:"Base",duration: 0})


const arr = [1,3,5,6,7]

function secondValue(arrayPass){
    return arrayPass[1]
}

// console.log(secondValue(arr))
console.log(secondValue([2,1,4,5,6]))