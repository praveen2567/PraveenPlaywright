import { expect } from '@playwright/test';

exports.addJobTitlePage = class addJobTitlePage {
    constructor(page) {
        this.page = page;
        this.adminMenu = page.locator('//span[text()="Admin"]');
        this.jobDropdown = page.locator('//span[text()="Job"]');
        this.jobTitlesMenu = page.locator('//a[text()="Job Titles"]');
        this.addButton = page.locator('//button[text()=" Add "]');
        this.jobTitleInput = page.locator('input[placeholder="Job Title"]');
        this.jobDescriptionInput = page.locator('textarea[placeholder="Type description here"]');
        this.saveButton = page.locator('button[type="submit"]');
        this.successMessage = page.locator("//*[text()='Successfully Saved']");
        this.jobTitleRequiredError = page.locator("(//span[text()='Required'])[1]");
    }

    async navigateToAddJobTitle() {
        await this.adminMenu.click();
        await this.jobDropdown.click();
        await this.jobTitlesMenu.click();
        await this.addButton.click();
    }

    async createJobTitle(title, description) {
        await this.jobTitleInput.fill(title);
        await this.jobDescriptionInput.fill(description);
        await this.saveButton.click();
    }

    async verifySuccess() {
        await expect(this.successMessage).toBeVisible();
    }

    async verifyJobTitleRequiredError() {
        await this.saveButton.click();
        await expect(this.jobTitleRequiredError).toBeVisible();
    }
}




// import {expect} from '@playwright/test'
// exports.jobTitlePage = class jobTitlePage{

//       constructor(page){
//         this.page = page 
//         this.AdminMenu = page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
//         this.addjobtilesubmenu = page.locator("//span[normalize-space(text())='Job']").click();
//         this.jobTitles = page.locator("//a[normalize-space(text())='Job Titles']").click();
//         this.clickadd = page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
//         this.jobTitle = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        
//         this.jobdescription = page.locator('(//input[@class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical')
//         this.saveButton = page.locator('button[type="submit"]').click()
//         this.successmEssage = page.locator("//*[text()='Successfully Saved']")
//         this.jobTitleError = page.locator('(//input[@class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
       

//     }
//     async navigateAdmin(){
//         await this.AdminMenu.click()
//     }
//     async navigateaddjobtilesubmenu(){
//         await this.jobTitles.click()
//         await this.clickadd.click()
//     }
//     async createjobTitle(jobtitle, jobDescription){
//         await this.jobtitle.fill()
//         await this.jobDescription.fill()
//         await this.saveButton.click()
//     }
//     async verifySuccess(){
//         await expect(this.successmEssage).toBeVisible()
//     }
//     async verifyErrorMsgMandatoryFileds(){
//           await this.saveButton.click()
//           await expect(this.jobTitleError).toBeVisible()

//     }
// }