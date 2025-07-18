const { test, expect } = require('@playwright/test');

test.describe('Swag Labs Login Page', () => {
  const baseUrl = 'https://www.saucedemo.com/v1/';

  test('should display login form elements', async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page.locator('input[data-test="username"]')).toBeVisible();
    await expect(page.locator('input[data-test="password"]')).toBeVisible();
    await expect(page.locator('input[type="submit"]')).toBeVisible();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('input[data-test="username"]', 'standard_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');
    await page.click('input[type="submit"]');
    await expect(page).toHaveURL(/inventory/);
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('input[data-test="username"]', 'invalid_user');
    await page.fill('input[data-test="password"]', 'wrong_password');
    await page.click('input[type="submit"]');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('should not allow login for locked_out_user', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('input[data-test="username"]', 'locked_out_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');
    await page.click('input[type="submit"]');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});
