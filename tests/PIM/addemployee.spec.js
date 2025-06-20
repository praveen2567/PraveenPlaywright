import { test, expect } from '@playwright/test';
import data from "../testData/addemployee.json";


test('Verify add employee with valid inputs', async ({ page }) => {
    await page.goto('/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill(process.env.ORG_USERNAME);
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ORG_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click(); 
    await expect(page.locator('#app')).toContainText('Time at Work');
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(data.firstname || '');
    await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastname || '');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});

