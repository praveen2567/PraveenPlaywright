import {test, expect} from '@playwright/test';

import logindata from "../testData/login.json"

import data from "../testData/addworkshifts.json";

test("Verify Add Work Shifts with valid inputs", async ({page}) => {
    // Actions
    await page.goto("/web/index.php/auth/login");

    await page.locator("input[name='username']").fill(logindata.username);

    await page.locator("input[name='password']").fill(logindata.password);

    await page.locator("button[type='submit']").click();

    // Assertions - verification point min 1 assertion in your test
    await expect(page).toHaveURL("/web/index.php/dashboard/index");

    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

    await page.locator("//span[normalize-space(text())='Job']").click();

    await page.locator("//a[normalize-space(text())='Work Shifts']").click();

    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click();

    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(data.name);

    await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()

    await expect (page).toHaveURL("/web/index.php/admin/workShift")
});