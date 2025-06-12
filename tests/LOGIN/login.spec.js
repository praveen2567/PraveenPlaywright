import {test, expect} from '@playwright/test';

test("Login with valid credentials", async ({page}) => {
    // Actions
    await page.goto("/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("Admin");

    await page.locator("input[name='password']").fill("admin123");

    await page.locator("button[type='submit']").click();

    // Assertions - verification point min 1 assertion in your test
    await expect(page).toHaveURL("/web/index.php/dashboard/index");

})

test("Verify login with valid username and invalid password", async ({page}) => {
    // Actions
    await page.goto("/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("Admin");

    await page.locator("input[name='password']").fill("qwedfs");

    await page.locator("button[type='submit']").click();

    // Assertions - verification point min 1 assertion in your test
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();   

})

test("Verify login with invalid username and valid password", async ({page}) => {
    // Actions
    await page.goto("/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("qwsdf");

    await page.locator("input[name='password']").fill("admin123");

    await page.locator("button[type='submit']").click();

    // Assertions - verification point min 1 assertion in your test
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();   

})

test("Verify login with invalid username and invalid password", async ({page}) => {
    // Actions
    await page.goto("/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("qwsdf");

    await page.locator("input[name='password']").fill("pshdf");

    await page.locator("button[type='submit']").click();

    // Assertions - verification point min 1 assertion in your test
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
    
    await page.close()
    

})