import { test, expect } from '@playwright/test';
import data from "../testData/addemployee.json";


test('Verify add employee with valid inputs', async ({ page }) => {
    await page.goto('/web/index.php/auth/login');
    const username = "Admin"
    const password = "admin123"

    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click(); 
    await expect(page.locator('#app')).toContainText('Time at Work');
    await page.getByRole('link', { name: 'PIM' }).click();

    const arr = ['input[value="0"]', 'input[value="2"]', 'input[value="4"]']

    //await page.locator(css).check() //checkboxes or radio buttons).

    for(let i=0; i<arr.length; i++){

        await page.locator(arr[i]).check({force:true}) //Use force: true only when necessary (like hidden or overlapped checkboxes)
        //.check({ force: true }) clicks on a checkbox or radio button even if it's not visible or disabled, forcing the check action.
        //page.locator(arr[i]) finds the element
    }
})








