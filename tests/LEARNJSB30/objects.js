
car = {
    model: "2025",
    make: "Nissan",
    number: "12345678",
    color: "Green"
}

// how to access the car color with dot notation
console.log(car.color)
console.log(car['color']) //same works like car.color
car['color'] = "white" //updating the property values
console.log(car['color']) //white
console.log(car.ownername) //undefined not show error like other languages - mean property not available
car['ownername'] = "Praveen" //Adding new property
console.log(car.ownername) //Praveen
delete car['make'] //delete make
console.log(car.make) //undefined

menuitems = {
    menu1: "Admin",
    menu2: "PIM",
    menu3: "Leave"
}
//for in
for(let item in menuitems){
    console.log("loop starts")
    console.log(menuitems[item])
    console.log("loop ends")
}

//data driven testing
// job titles like
// CEO1
// CFO1
// COO1
// {
//     test1 create for CEO
// }
// {
//     test2 create for CFO
// }
// {
//     test3 create for COO
// }

// not like this above just one time we write it and loop it only one test case multiple will runs

str1 = "Raju"
str2 = "Praveen"
str3 = `${str1} and ${str2} are friends`
console.log(str3)