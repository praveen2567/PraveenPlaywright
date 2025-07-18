import {test, expect} from '@playwright/test';


import data from "../testData/addjobtitle.json"

test("Verify Add Job Title with valid inputs", async ({page}) => {
    // Actions
    await page.goto("/web/index.php/auth/login");

    await page.locator("input[name='username']").fill(process.env.ORG_USERNAME);

    await page.locator("input[name='password']").fill(process.env.ORG_PASSWORD);

    await page.locator("button[type='submit']").click();

    // Assertions - verification point min 1 assertion in your test
    await expect(page).toHaveURL("/web/index.php/dashboard/index");

    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click(); 

    await page.locator("//span[normalize-space(text())='Job']").click();

    await page.locator("//a[normalize-space(text())='Job Titles']").click();

    await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();


    let r = (Math. random () + 1). toString(36). substring(7);

    await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(data.jobtitle+r)

    await page.locator("//textarea[@placeholder='Type description here']").fill(data.jobDescription+r)

    await page.locator('button[type="submit"]').click()

    await expect(page).toHaveURL('/web/index.php/admin/viewJobTitleList')

});