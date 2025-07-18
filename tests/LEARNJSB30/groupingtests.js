const {test,expect} = require('@playwright/test');

test.describe("Group 1", () => {

    test.only("Test 1", async ({page}) => {
       console.log("Test 1 is running"); 
    })
    test("Test 2", async ({page}) => {
       console.log("Test 2 is running"); 
    })
})

test.describe("Group 2", () => {

    test("Test 3", async ({page}) => {
       console.log("Test 1 is running"); 
    })
    test("Test 4", async ({page}) => {
       console.log("Test 2 is running"); 
    })
})

test.describe("Group 3", () => {

    test("Test 5", async ({page}) => {
       console.log("Test 1 is running"); 
    })
    test("Test 6", async ({page}) => {
       console.log("Test 2 is running"); 
    })
})
test.describe("Group 4", () => {

    test("Test 7", async ({page}) => {
       console.log("Test 1 is running"); 
    })
    test("Test 8", async ({page}) => {
       console.log("Test 2 is running"); 
    })
})

// Annotations: which helps us to run very few test cases out of which
// if you want to run only one test case
// .only


