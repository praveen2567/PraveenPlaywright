// Even though it looks like it returns a string —
// 👉 this function actually returns a Promise behind the scenes.

// async function myFunction() {
//     return "Hello"
// }
// console.log(myFunction());

// You need await or .then() to get the actual value

// or

// This is same as above, but written in manual promise style (without async keyword)

// function myFunction(){
//     return Promise.resolve("Hello") 
// }
// myFunction().then(console.log); // Hello

// // using await
// const getData = async () => {
//     let y = await "Hello World" // wait for this to resolve
//     console.log(y) // then print it
// }
// getData()

// 💡 What’s happening?
// await waits for the value on the right side
// Even "Hello World" is not a real promise — but JS automatically wraps it like a promise
// So it behaves like:

// await Promise.resolve("Hello World");

// JS sees "Hello World"
// 👉 Not a promise? No problem — I’ll make it a promise myself
// 👉 Wait for it
// 👉 Done! Print Hello World

// Code	                                        What It Means	                    Returns
// async function f() { return "Hi" }	            Returns                             Promise	Promise.resolve("Hi")
// function f() { return Promise.resolve("Hi") }	Manually returning a promise	    Promise
// await "Hi"	                                    Converts into promise	            waits and gives value


//  Interview Line:
// “An async function always returns a promise. 
// Even if I return a string, JavaScript automatically wraps it with Promise.resolve(). 
// await pauses the code until the promise is resolved and then continues
// if you take cypress they are internally managed async and await no need to write it explicitly
async function step1(value){
    return value + 10;
}

async function step2(value){
    return value + 10;
}

async function step3(value){
    return value + 10;
}

async function run(){
    let result1 = await step1(10); //20
    let result2 = await step2(result1); //30
    let result3 = await step3(result2); //40
    console.log("Result " + result3)
}
run()