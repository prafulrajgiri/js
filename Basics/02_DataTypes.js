"use strict"; // treat all JS code as newer version

// alert(3 + 3) we are using node js, not browser 
console.log(3+3); console.log("=6")
let name = "praful"
let age = 19
let isLoggedIn = false

console.table([ name,age,isLoggedIn])

// number => 2 to power 53
//bigint 
// string=> ""
//boolean => true/false
// null => standalone value,empty value, can be assigned to a variable unlike undefined
// undefined => decalred but not defined/assigned a value
// symbol => unique

//object 
console.table([typeof name, typeof age, typeof null, typeof undefined])

console.log(typeof"praful");
console.log(typeof age);
console.log(typeof null); //object
console.log(typeof undefined); // undefined
    
