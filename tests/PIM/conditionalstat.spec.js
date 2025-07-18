import { test, expect } from '@playwright/test';

// Cross-browser testing
// Validating different browser compatibility
// Running specific tests only on one browser

test("Based on BrowserName run different script", async ({ page, browserName }) => {

    switch (browserName) {
        case "chromium" :
             await page.goto("https://www.flipkart.com/");
             await page.close()
             break;

        case "firefox":
            await page.goto ("https://www.amazon.in/");
            await page. close()
            break;
        
        case "webkit":
            await page.goto ("https://www.myntra.com/");
            await page. close()
            break;
    }
})
            
