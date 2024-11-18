const arr = [1,2,3]

// const totalReduce = arr.reduce((acc, currval) => {
//     console.log(`Current Value:${currval} acc: ${acc}`)
//     return acc+currval
// },2)
// console.log(totalReduce)
const totalReduce = arr.reduce((acc,currval) => currval+acc,0)
// console.log(totalReduce)

const cart = [
    {
        item: "JS Tutorial",
        price: 1200
    },
    {
        item:"Another item",
        price: 775
    },
    {
        item:"Another item2",
        price: 7225
    }
]
const total = cart.reduce((acc,cart)=> acc + cart.price , 0)
console.log(total)