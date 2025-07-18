// saveCookie.js
const { chromium } = require('@playwright/test');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.waitForURL('**/dashboard');

  const cookies = await context.cookies();
  const orangehrmCookie = cookies.find(c => c.name === 'orangehrm');

  if (orangehrmCookie) {
    fs.writeFileSync('cookie.txt', orangehrmCookie.value);
    console.log("Cookie saved:", orangehrmCookie.value);
  } else {
    console.log("Login cookie not found!");
  }

  await browser.close();
})();
