
const { test, expect } = require('@playwright/test');


test("Working with dropdowns - example", async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    //text

    // await page.locator('#country').selectOption("Belgium")
    //or 
    // await page.locator('#country').selectOption({label : "Belgium"})

    // await expect(page.locator("#country")).toHaveAttribute('value', '20')

    // await expect(page.locator('#country')).toHaveAttribute('value', '17');

    //Value  - Attribute 

//    await page.locator("#country").selectOption("17")

    //await page.locator('#country').selectOption("101")  //Iran
    //or
   // await page.locator('#country').selectOption({value : "102"})
//    await page.locator('#country').selectOption({label : "Egypt"})


    //index

    //await page.locator('#country').selectOption(4) -- this will not work like in cypress

//   await page.locator('#country').selectOption({index : 4})

//  just by looking we cant decide its a dropdown NO in by seeing at DOM present select tag and 
// option value label like this then its a dropdown
 
    // how many dropdowns are available
    // await expect.soft(page.locator("#country>option")).toHaveCount(200) // Assertions
    // Locator: locator('#country>option')
    // Expected: 200
    // Received: 248
    // Call log:

      //expect.soft()

   // const options = await page.$$('#country>option') // array

    //console.log(options.length)

     const dropdown = page.locator('#country'); // Use the correct selector for the dropdown

    // // // Get all option elements within the dropdown
    const options = await dropdown.locator('option').allTextContents();
    console.log(options)
     await page.waitForTimeout(5000)

})


// Multiple selected items
//await page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);


//hard assertion  

//expect(). - it will stop the execution

//soft assrtion

//expect.soft() - even if fail it will executes

// await expect(actual).toBe(expected)          // Hard
// await expect.soft(actual).toBe(expected)     // Soft
// Use hard assertions for must-pass conditions, and soft assertions for optional validations or debugging.

// ✅ HARD ASSERTION
// ▶️ expect(...)
// This is a hard assertion.
// ❌ If it fails, the test immediately stops and does not execute the next line.
// 🔸 Example:
// await expect(page.locator('h1')).toHaveText('Welcome')  // Hard assertion
// console.log('This will not run if the assertion fails')
// ✅ SOFT ASSERTION
// ▶️ expect.soft(...)
// This is a soft assertion.
// ✅ If it fails, the test continues running.
// Useful to collect multiple failures in a test.
// 🔸 Example:
// await expect.soft(page.locator('h1')).toHaveText('Welcome')  // Soft assertion
// console.log('This will still run even if assertion fails')
// 🔁 Difference Table:
// Feature	Hard Assertion (expect)	Soft Assertion (expect.soft)
// Stops test on fail?	✅ Yes	❌ No
// Use case	Critical validation	Optional/Informative checks
// Execution continues	❌ No	✅ Yes
// Reporting	Stops after first failure	Shows all soft assertion failures

// the idea of automation is every test case should be individual one to another not all linked 
// execute the test cases in parallel manner if one to another linked it is not possible to execute
// eventhough atleast in single file 

// make it fullyparallel : false in the files it will execute sequentially but individual files will take it as parallel
