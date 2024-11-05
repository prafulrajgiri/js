// Immediately Invoked Function expression

(function (user){
    console.log("Hello " + user)
})("praful"); //no semicolon between two iife = error

(() => {
    console.log("Hello Two")
})()