
let a = 20
const b = 30
var c = 400

if (true) {
    let a = 20
    const b = 30
    var c = 40
    // console.log("inner",a)
    // console.log("inner",b)
}


// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const name = " Praful"
    function two() {
        const greet = "Hello"
        console.log(greet + name)
    }
    two()
    // console.log(greet + name)
}
// console.log(greet + name)
// one()
console.log(addOne(5))

function addOne(num){
    return num + 1
}

// console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
