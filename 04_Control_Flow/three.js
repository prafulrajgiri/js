const tech = ["PHP","PYTHON","RUBY"]

// tech.forEach( function (val){
//  console.log(val);
// })

// tech.forEach( (items) => {
//     console.log(items)
// }
// )

// function printval(value) {
//     console.log(value)
// }

// tech.forEach(printval)

// tech.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// }

// )

const nums = [1,2,3,4,5,6,7,8,9]

const evenlist = nums.filter( (num) => num % 2 == 0 ) //if scope opened then return must
console.log(evenlist);
