import {test, expect} from '@playwright/test';

// import logindata from "../testData/login.json"

import data from "../testData/addempstatus.json";

test("Verify Add Emp Status with valid inputs",{tag : "@smoke"}, async ({page}) => {
    // Actions
    await page.goto("/web/index.php/auth/login");

    const creds = ["Admin", "admin123"]

    await page.locator("input[name='username']").fill(creds[0]);

    await page.locator("input[name='password']").fill(creds[1]);

    await page.locator("button[type='submit']").click();

    // Assertions - verification point min 1 assertion in your test
    await expect(page).toHaveURL("/web/index.php/dashboard/index");

    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

    await page.locator("//span[normalize-space(text())='Job']").click();

    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[3]").click();

    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click();

    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(data.name);

    await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()

    await expect (page).toHaveURL("/web/index.php/admin/employmentStatus")
});