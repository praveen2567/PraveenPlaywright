import {test, expect} from '@playwright/test'

const jobtitles = ["Pavan", "Sairo", "Teja", "Vishnu"]

// we are going to run our test cases on the virtual machine why automation we doing there is no manual 
// intervention will be there it should run all the test cases and give the reports
// for(let title of jobtitles)
// both do the same job
jobtitles.forEach(title => {
    test(`example for looping test data - DDT - ${title}`, async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']") .click()


    // Assertions - verification point min 1 assertion in your test
    await expect(page).toHaveURL("/web/index.php/dashboard/index");

    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click(); 

    await page.locator("//span[normalize-space(text())='Job']").click();

    await page.locator("//a[normalize-space(text())='Job Titles']").click();

    await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();


    let r = (Math. random () + 1). toString(36). substring(7); //random characters

    await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(title+r)

    await page.locator("//textarea[@placeholder='Type description here']").fill("jobDescription")

    await page.locator('button[type="submit"]').click()

    await expect(page).toHaveURL('/web/index.php/admin/viewJobTitleList')

    })
})

    
