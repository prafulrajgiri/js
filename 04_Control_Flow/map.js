const Num = [1,2,3,4,5,6,7,8,9]

// const numsum = Num.map( (Num) => Num + 1 )
// console.log(numsum)

// const numsum = Num.map( (num) => {
//     return num+2
// } )
// console.log(numsum)

const numSum = Num.map( (num) => num*10).map( (num)=> num+num) //Map Chaining , first map returns the value then other map work with the result value
console.log(numSum)