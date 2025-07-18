const { test, expect } = require('@playwright/test');


test('drag and drop- example13', async ({ page }) => {
    // Go to the page
    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop');

    await page.locator("#menu-fried-chicken").dragTo(page.locator("#plate-items"))

    // await page.locator("#menu-fried-chicken").dragTo(page.locator("#plate-items"))

    // // await page.locator('#menu-fried-chicken').dragTo(await page.locator('#plate-items'))

    await page.locator('#menu-hamburger').dragTo( page.locator('#plate-items'))

    await page.locator('#menu-ice-cream').dragTo( page.locator('#plate-items'))

    // await page.waitForTimeout(5000)

    const sourceFriedChicken = await page.locator('#menu-fried-chicken');
    const sourceHamburger = await page.locator('#menu-hamburger');
    const sourceIceCream = await page.locator('#menu-ice-cream');

    const targetPlateItems = await page.locator('#plate-items');

    await sourceFriedChicken.dragTo(targetPlateItems);
    await sourceHamburger.dragTo(targetPlateItems);
    await sourceIceCream.dragTo(targetPlateItems);
    await page.waitForTimeout(5000)

})

// dragTo(target):
// This method drags an element and drops it on the target
// Line	What it does
// page.locator('#menu-fried-chicken')	Finds the fried chicken menu item element.
// page.locator('#menu-hamburger')	Finds the hamburger menu item element.
// page.locator('#menu-ice-cream')	Finds the ice cream menu item element.
// page.locator('#plate-items')	Finds the target drop zone (e.g. a plate).