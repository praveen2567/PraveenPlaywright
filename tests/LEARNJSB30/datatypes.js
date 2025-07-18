// js is a dynamically typed language - mean In JavaScript, you don’t declare the type of variables 
// (like string, number, boolean) explicitly

// let value = 42;         // Initially a number
// value = "Hello World";  // Now it's a string

// You can write code faster

// relation between 
// Java And JS -- no relation


// javascript 
// typescript
//  here there is a lot connection is there
//  whatever the code in JS may be run in typescript
//  but whatever in typescript we cant run in js
//  typescript is just an enhanced version of js

//  Java

//  int x = 4; // here x contains int value but override with string not possible

//  x = "Raju" //compiler will thrown an error

//  But in JS no data type mention

// x = 10 if you dont give anything like variable by default var created

//  y = "Raju"
//  console.log(y)
//  console.log(typeof(y))

// //  type conversion automatically do in JS but this kind of flexibility not there in other languages

// 1. primitive data types --immutable

// 1. Number x=-34 or x = 34.5 both are considered number not like other programming languages for all the numbers number is the data type
// 2. string x = "Raju" or x = 'Raju' or x = `Raju`
// 3. Boolean x = true or x = false
// 4. undefined var x or var x = undefined
// 5. null var x = null you declared a variable and explicitly mention empty mean null it return to the consloe object

// end with semicolon is optinal 

// Non primitive data types - collection of primitive dada types --mutable
// 1. Arrays
// 2. Objects
// 3. Regular Expressions

arr = [] //empty array

arr1 = ["Admin", "admin123"] // 2 elemets inside

arr2 = ["Raju",34,true,null,undefined] //all the elements are not similar data types -heterogenious
console.log(typeof(arr2[3])) //object
console.log(typeof(arr2[4])) //undefined

arr3 = [1,2,3,4,56,7,89] //all the elements are similar data types - homogenious
console.log(typeof(arr3))

// index always starts from 0

console.log(arr1[0])
console.log(arr1[1])

arr4 = ["Eat", "Sleep"]
arr4[1]="Study"
console.log(arr4)

str = "Javsscript"

str[3]='a' //immutable
console.log(str)

// objectname = {
//     propertyname : propertyvalue
// }

student = {
    firstname: "Anjali",
    lastname: "M",
    place: "Blr"
}

console.log(student.firstname)
console.log(student.lastname)
console.log(student.place)

creds = {
    username: "Admin",
    password: "admin123"
}
console.log(creds.username)