// +



// -

// *

// /

// %

// ++

// --

// ==

// ===

// >

// <

// >=

// <=

// &&

// ||

// !

// 1. Arithmetic operators

// +
// -
// *
// /
// % //modulus
// ++ //increemtn
// -- //decrement
  
console.log(6+7)//Addition

console.log("Raju" +" "+ "G") // concatenation
// console.log("Raju "+"G") Raju G
console.log(45 + " raju") //automatically converted to string 45 raju
console.log(45 + "23") //same con to str 4523
console.log(2+3+5+"4"+4+2)//10442

//coersion in JS

console.log(34-20)
console.log(20/10)
console.log(14%5)

console.log(40-"20")

console.log(40-"raju") //NaN - not a number something there but not a number

// x = 20
// x++ //x = x+1
// console.log(x)

// y = 40
// y-- //y = y-1
// y--
// console.log(y)

// 2. Logical operators
// AND
// OR
// NOT
// &&
// x        y        result
// t       f           f
// f       t           f
// f       f           f
// t       t           t

// ||
// x        y        result
// t       f           t
// f       t           t
// f       f           f
// t       t           t

console.log(!(true))
console.log(!(false))

//= Assignment operator  //praveen=pavan here we are comparing 

// x = 30

//comparison operator
console.log("raju" == "raju") //true
console.log("raju" == "praveen") //false
console.log("raju" === "raju") //true
console.log("raju" === "shiva") //false 
// but there is a difference
console.log(34 == "34")//true str--num it will just compare only values but not datatypes
console.log(34 === "34")//false num--str it will compare not only values but also datatypes

// js is a case sentitive lanuage
console.log("Raju" == "raju")//false

//Assignment operator
// x = 30
// x += 5 //x = x + 5
// console.log(x)

// //**  in 2015

// console.log(2**6)

// conditional operator / ternary operator
value1 = "Raju"
value2 = "Praveen"

// condition// true or false

// syntax
// condition ? value1 : value2

x = 4=="4" ? value1 : value2
console.log(x)