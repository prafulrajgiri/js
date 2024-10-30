const add = (num1,num2) => {
    return num1 + num2
}
// console.log(add(2,4))

const add2 = (num1,num2) => (num1 + num2) //implicit return , if { } used then return keyword is must
// console.log(add(2,4))



const user = () => ({username:"Praful"})
console.log(user())