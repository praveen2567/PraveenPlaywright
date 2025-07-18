const { browser, test, expect } = require('@playwright/test');
await page.goto ("https://the-internet.herokuapp.com/disappearing_elements");

const contactus = page-getByRole("link", { name: "Contact Us" });

const portfolio = page-getByRole("link", { name: "Portfolio" });

const gallery = page-getByRole("link", { name: "Gallery" });

if (await gallery. isVisible()) {

    await gallery.click();

    console.log("clicked on Gallery")
}

else if (await portfolio. isVisible()) {
    await portfolio.click();
    console. log("clicked on Portfolio")
}