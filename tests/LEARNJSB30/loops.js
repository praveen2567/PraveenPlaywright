// for loop is used to repeat a block of code multiple times



// console.log("Raju")
// console.log("Raju")
// console.log("Raju")
// console.log("Raju")
// console.log("Raju")
// console.log("Raju")

// for(initialization; condition; increment / decrement){
//     //block of code
// }

// Print numbers from 1 to 100 with "Raju"
// for(let i=1; i<=100; i++){
//     console.log(i)
//     console.log("Raju")
// }


// arr = ['input[value="0"]', 'input[value="2"]', 'input[value="4"]']

// //await page.locator(css).check()

// for(let i=0; i<arr.length; i++){

//     await page.locator(arr[i]).check()
// }


// let fruits = ['banana','apple','mango']

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]) //prints
// }

// ✅ for...of — Best for Arrays and Iterables it gives values directly
//for of loop(no index needed)
// const fruits = ['banana','mango','grapes']

// for(const fruit of fruits){
//     console.log(fruit) //prints
// }

// for in loop(no index needed)

//  Don’t use for...in on Arrays
// let nums = [10,20,30]
// for(let i in nums){
//     console.log(i) // ❌ Gives index: 0, 1, 2
//     console.log(nums[i]) // ✅ 10, 20, 30 (but not the best approach)
// }

// ✅ for...in — Best for Objects

let person = {
    name: "Raju",
    age: "34",
    job: "QA"
}

for(let key in person){
    // console.log(key, ":", person[key])  //When property name is dynamic (from variable)
    console.log(key, ":", person.key) //When property name is known
    console.log(person.name) // instead use this
    console.log(person.age)
    console.log(person.job)
}

// for of use case
// ✅ Best for	Arrays, Strings, Iterables
// 📦 Iterates over	Values
// 🛠 Use case	Reading array values, looping DOM, strings
// ⚠ Not suitable for	Objects (non-iterable)

// for in use case
// ✅ Best for Objects (key names)
// 📦 Iterates over	Keys (property names)
// 🛠 Use case Looping object keys or dynamic properties
// ⚠ Not suitable for Arrays (you'll get index, not value)

// objects
// An object is a collection of key-value pairs.
// property = combination of a key and a value
// ➡️ Each key: value pair is called a property of the object
// Key → Always a string (or will be converted to string).
// Value → Can be any data type: string, number, boolean, array, object, function, etc.
// Property → A full key-value pair like "name": "Raju".

// while(condition){
//     //block of code
//     //increment / decrement
// }

//print 11 times
// let i = 0

// while(i<=10){
//     console.log(i)
//     console.log("Shiva")
//     i++
// }


// let i = 11 //infinite loop

// while(i>0){
//     console.log(i)
//     console.log("Shiva")
//     i++
// }

//condition true or false atleast one time execute block of code
// do{
// //block of code
// }while(condition)

let i=0
do{
    console.log(i)
    console.log("Praveen")
    i++
}while(i<=10)

// ES6 we used in automation
// for in - Objects
// for of - arrays
// for each - arrays
