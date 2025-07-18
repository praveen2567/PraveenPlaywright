const { test, expect } = require('@playwright/test');

test('Working with Radio button - example', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    await expect(page.locator('input[value="m"]')).toBeChecked() //male
    //by default male is checked right so we have to verify that
    
    await expect(page.locator('input[value="f"]')).not.toBeChecked()

    await page.locator('input[value="f"]').check() //female

    await expect(page.locator('input[value="m"]')).not.toBeChecked()
    await expect(page.locator('input[value="f"]')).toBeChecked()

    const isChecked = await page.locator('input[value="f"]').isChecked() // true / false

    console.log(isChecked)

    await page.waitForTimeout(5000)

})


test('Working with Radio button - example 2', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html')
    
    await page.locator('input[value="Option 2"]').check()

     // Select Option 1 instead (this will deselect Option 2)
    // await page.locator('input[value="Option 1"]').check()

    await page.locator('input[value="Option 2"]').uncheck()
    // Radio buttons cannot be unchecked once selected.
    // But you cannot uncheck a radio button directly like you do with checkboxes.
    // check() is valid for radio buttons.
    // uncheck() is only valid for checkboxes, not radios
    await page.waitForTimeout(5000)

})