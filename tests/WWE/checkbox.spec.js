const { browser, test, expect } = require( '@playwright/test')

test("Check box Example", async ({ page }) => {
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    await page.locator('//input[@type="checkbox"]').check()
    const checked = await page.locator('//input[@type="checkbox"]').isChecked()
    console.log(checked)
    if(!checked){
        await page.locator('//input[@type="checkbox"]').check()
    }
    await expect(page.locator ('//input[@type="checkbox"]')).toBeChecked()
    await page.waitForTimeout(3000) //this will halt for execution before termination/closing this
    await page.locator('//input[@type="checkbox"]').uncheck() 
    await page.waitForTimeout(2000) //in general you dont write this everytime just demo purpose i wilshow
    await expect(page.locator ('//input[@type="checkbox"]')).not.toBeChecked()
})
// now i want to check all the checkboxes 
test.only("Check box Example -2", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    // const checkboxes = ["#checkBoxOption1", "#checkBoxOption2", "#checkBoxOption3"]
    const checkboxes = await page.$$("//div[@id='checkbox-example']/fieldset/label/input")//give the common locator for this 
    // now it will take all the elements and it will give you array same array we loop it $$ will give final array like above 
    for(let checkbox of checkboxes){
        await page.locator(checkbox).check()
    }
})
