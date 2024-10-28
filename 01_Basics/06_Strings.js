const name = "Praful"
const Lname = "Giri"

// console.log("I am  " + name + Lname) 
// not approproate method as it will get complex with more variable
// so we use back ticks 

// console.log(`I am ${name} ${Lname}`)
//This is known as string interpolation

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.charAt(3))
// console.log(name.indexOf('f'))

// const nameSliced = name.substring(0,3)
// console.log(nameSliced)
// // substring cannot have negative value

// const nameSliced2 = name.slice(-4,4)
// console.log(nameSliced2)

// const newStringOne = "  Praful     "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://prafulrajgiri.com.np/home%20page"
console.log(url)
console.log(url.replace('%20','-'))
console.log(url.includes('praful'))
console.log(url.split('/'))