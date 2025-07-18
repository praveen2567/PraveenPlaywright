import { test, expect } from '@playwright/test';
import data from "../testData/addemployee.json";

const employees = {
    emp1:{
        firstname: "Raju",
        lastname: "G"
    },
    emp2:{
        firstname: "Shiva",
        lastname: "T"
    }
}

for(let emp in employees){
    test(`Add employee test - ${emp}`, async ({ page }) => {
    await page.goto('/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
    await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click(); 
    await expect(page.locator('#app')).toContainText('Time at Work');
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(employees[emp].firstname);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(employees[emp].lastname);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});
}