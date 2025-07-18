// var x = 10
// var y = 20

// var z = x + y

// console.log("The value of z is: "+z)

var stuname = "Raju" //if you have 300 scripts you mention the name raju now the requirement changes to raju to Anjali so we are not going to update in every place 

stuname = "Anjali" //instead we can create one variable and we can store it here whenever it chnages the req just change in one place reusability purpose

stuname = "Praveen"

console.log(stuname)

var x // Declaration

var x = 10 // Declaration & Assignment

console.log(x)

console.log(2**5) // 2 power 5

str = "         helo      "

console.log(str.trim()) //built-in methods

//var
// global
// re assign diffrent value is possible
// redclaration same variable is possible
// var from initial version js



//let
// Blocked scope
// re assign diffrent value is not possible
// redclaration same variable is not possible
// let from ES6 version js

//const
// Blocked scope
// re assign diffrent value is not possible
// redclaration same variable is not possible
// let from ES6 version js

// var greet = "Namaste"
// if(4 > 3){
//     var greet = "Namaste"
//     // console.log(greet)
// }
// console.log(greet)

// if(4 > 3){
//     let greet = "Namaste"
//     // console.log(greet)
// }
// console.log(greet)

if(4 > 3){
    let greet = "Namaste"
    console.log(greet)

    if(5>2){
        console.log(greet)
    }
    {
        console.log(greet)
    }
}

// if block inside many sub blocks yes we can access
