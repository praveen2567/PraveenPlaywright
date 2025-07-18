// This is not entire project level
// whatever you write in this block of code that applicable only for below test cases in this file only

import { test, expect } from '@playwright/test';

let page; //undefined variable you want to access inside  //outside create for scope we can access inside every test with new page stored here
//when you want to use for all test cases use the browser first like create browser fixture
// ({ browser }) then from browser fixture we can create a new page
test.describe('Verify Login Functionality', () => {
  
  test.beforeEach(async ({ browser }) => { //({ browser }) - fixture
    page = await browser.newPage();
    await page.goto('/web/index.php/auth/login');
  });
  test.afterEach(async () => {
    console.log("test execution completed")
  })

  test.afterEach(async () => {
    await page.close();
  });

  test('Login with valid credentials', {tag : "@smoke"}, async () => {
    await page.locator("input[name='username']").fill(process.env.ORG_USERNAME);
    await page.locator("input[name='password']").fill(process.env.ORG_PASSWORD);
    await page.locator("button[type='submit']").click();

    await expect(page).toHaveURL('/web/index.php/dashboard/index');
  });

  test('Verify login with valid username and invalid password', async () => {
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("qwedfs");
    await page.locator("button[type='submit']").click();

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
  });

  test('Verify login with invalid username and valid password', async () => {
    await page.locator("input[name='username']").fill("qwsdf");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
  });

  test('Verify login with invalid username and invalid password', async () => {
    await page.locator("input[name='username']").fill("qwsdf");
    await page.locator("input[name='password']").fill("pshdf");
    await page.locator("button[type='submit']").click();

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
  });

});

// A fixture is any object or context (like page, browser, context, etc.) that is:
// Automatically provided (injected) to your test
// Created before the test starts
// Disposed after the test ends
// how many fixtures are available in playwright
// Here are the core built-in fixtures provided by @playwright/test
// 1. page  - A fresh browser page (tab) for every test
// 2. browser  - The browser instance (e.g., Chromium, Firefox, WebKit)
// 3. context  - A new browser context (isolated browser profile)
// 4. browserName  - Returns 'chromium', 'firefox', or 'webkit' depending on the project
// 5. baseURL - The base URL defined in your playwright.config.ts
// 6. browserType  - Gives the browser type object like chromium, firefox, or webkit
// 7. launchOptions  - Options used to launch the browser 
// 8. contextOptions  - Options used to create browser context
// 9. request  - Used to make API requests with request.newContext() request.get(), request.post()
// 10. testInfo  - Metadata about the current test (title, retry, workerIndex, etc.)

// All fixtures are reset per test by default
// Every test gets a fresh, isolated instance of each fixture like page, context, browser, etc.
// 🔍 What happens internally:
// Test A gets a brand new page
// Test B gets a completely separate page
// They don't share cookies, storage, localStorage, etc.
// It’s like opening a new incognito window for each test

// 🧠 Why is this important?
// Benefit	Explanation
// ✅ Test Isolation	Tests don’t interfere with each other
// ✅ No shared state	One test failing won’t corrupt another
// ✅ Better Parallelism	Safe to run tests in parallel
// ✅ Easier Debugging	Clean slate every time, reproducible results

// 🔄 How Playwright Manages Fixtures
// Fixture	Reset Every Test?	Description
// page	✅ Yes	New browser tab
// context	✅ Yes	New browser profile (cookies, storage)
// browser	🔁 Shared (by default, per worker) unless overridden	
// testInfo	✅ Yes	Contains data about current test
// request	✅ Yes	New HTTP client per test

// ❓Why Would You Want to Share Something Across Tests?
// Sometimes you may want:
// One login step reused across multiple tests
// A database connection shared for the whole suite
// A browser session preserved across tests
// But remember:
// 👉 Playwright isolates each test by default (new page, context per test).
// So to share state or setup across tests, you need special techniques


// 🔧 Option 1: test.describe.serial()
// ✅ When to use:
// You have multiple tests that depend on each other and need to share state (like login data or page context).
// 📄 Example:
// const { test, expect } = require('@playwright/test');

// let username = '';

// test.describe.serial('User workflow', () => {
//   test('Register a user', async ({ page }) => {
//     await page.goto('/register');
//     await page.fill('#name', 'Praveen');
//     await page.click('#submit');
//     username = 'Praveen'; // captured for next test
//   });

//   test('Use registered user', async ({ page }) => {
//     await page.goto(`/profile/${username}`);
//     await expect(page.locator('h1')).toContainText('Praveen');
//   });
// });

// ✅ Summary
// Method	                    Use Case
// test.describe.serial()	    Share variables between ordered tests
// globalSetup	                Run code once for entire suite (e.g., login)
// beforeAll() in describe()	Setup shared context within one file
// Custom fixtures	            Share objects across tests without pollution

// test.describe.serial() is special:
// It forces all the tests inside that block to run in order (sequentially).
// Since they run one after the other, you can safely share variables or state between them.

// 🧠 Normally (without .serial()):
// test('Test A', async () => { ... });
// test('Test B', async () => { ... });
// These may run in parallel, and you cannot rely on the order or shared values.

// ✅ But with .serial():
// let value = '';

// test.describe.serial('My serial tests', () => {

//   test('Step 1 - Set value', async () => {
//     value = 'Praveen';
//     console.log('Set value:', value);
//   });

//   test('Step 2 - Use value', async () => {
//     console.log('Using value:', value); // ✅ Safe! It will be 'Praveen'
//   });

// });

// 🔁 What happens:
// Step 1 runs first → value = 'Praveen'
// Step 2 runs second → safely reads that value
// ✅ You can reuse login, capture ID from a test, or chain data this way.

// Real world use case example 
// let userId;

// test.describe.serial('User workflow', () => {
//   test('Register user', async ({ page }) => {
//     await page.goto('/register');
//     await page.fill('#username', 'praveen');
//     await page.click('button[type="submit"]');

//     userId = await page.locator('#user-id').innerText(); // Save value
//   });

//   test('Check profile using ID', async ({ page }) => {
//     await page.goto(`/profile/${userId}`);
//     await expect(page.locator('h1')).toHaveText('praveen');
//   });
// });

// ✅ Here:
// You register a user and get their userId
// Then use it in the next test
// 💡 This is safe only because of .serial(), otherwise test order isn’t guaranteed!


// ⚠️ When to Use .serial() (Golden Rule)
// Use Case	                    Use .serial()?
// Tests depend on each other      ✅	Yes
// Tests are independent             No (run normally or in parallel)
// You need shared state/variable      ✅	Yes
// You want parallel execution         ❌	No

// .serial() does this:
// ⏱ Runs tests one after another (in order)
// 🧠 Allows sharing variables safely between tests
// ❌ Prevents Playwright from parallelizing those tests
// ✅ Useful for flows like login → reuse session/data