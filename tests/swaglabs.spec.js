import { test, expect } from '@playwright/test';

test('Verify login with valid creds', async ({ page }) => {
  const username = "standard_user"
  const password = "secret_sauce"
  await page.goto('https://www.saucedemo.com/v1/');
  console.log("URL Launched")
  
  await page.locator("(//input[@class='form_input'])[1]").fill(username)
  
  console.log("Username Entered")
  
  await page.locator("(//input[@class='form_input'])[2]").fill(password)
  
  console.log("Password Entered")

  await page.locator("//input[@type='submit']").click()
  
  console.log("Click on login button")

  await expect (page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
  
  console.log("Verified Products are visible")
});


test('Verify login valid username invalid password', async ({ page }) => {
  const username = "standard_user"
  const password = "secret_123"
  await page.goto('https://www.saucedemo.com/v1/');
  console.log("URL Launched")
  
  await page.locator("(//input[@class='form_input'])[1]").fill(username)
  
  console.log("Username Entered")
  
  await page.locator("(//input[@class='form_input'])[2]").fill(password)
  
  console.log("Password Entered")

  await page.locator("//input[@type='submit']").click()
  
  console.log("Click on login button")
  
  await page.locato("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]").isVisible()
  console.log("Username and password do not match any user in this service")
});

