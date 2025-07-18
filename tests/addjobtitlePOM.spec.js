import { test, expect } from '@playwright/test';
import { loginPage } from '../pageObjects/loginpage.po';
import { addJobTitlePage } from '../pageObjects/jobtitles.po';
import logindata from '../tests/testData/login.json';
import jobtitledata from '../tests/testData/addjobtitle.json';

let page;
let login;
let jobTitle;

test.describe("Verify Admin > Add Job Title Functionality", () => {
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        login = new loginPage(page);
        jobTitle = new addJobTitlePage(page);

        await login.launchUrl();
        await login.loginwithcreds(logindata.username, logindata.password);
        await login.loginSuccess();

        await jobTitle.navigateToAddJobTitle();
    });

    test("Verify Job Title Creation", async () => {
        await jobTitle.createJobTitle(jobtitledata.title, jobtitledata.description);
        await jobTitle.verifySuccess();
    });

    test("Verify Error Message when Job Title is Empty", async () => {
        await jobTitle.verifyJobTitleRequiredError();
    });
});




// import { test, expect } from '@playwright/test'
// import { loginPage } from '../pageObjects/loginpage.po'
// import logindata from "./testData/login.json"
// import { addEmployeePage } from '../pageObjects/addemployeepage.po'
// import addemployeedata from './testData/addemployee.json'
// let page // i want to share the same page for every object 
// let login
// let addemployee
// test.describe("Verify Login Functionality", async () => {
//     test.beforeEach(async ({browser}) => {
//         page = await browser.newPage() // this will create a page 
//         login = new loginPage(page)
//         addemployee = new addEmployeePage(page)
//         await login.launchUrl()
//         await login.loginwithcreds(logindata.username, logindata.password)
//         await login.loginSuccess()
//         await addemployee.navigatePIM()
//         await addemployee.navigateAddEmployee()
//     })
//     test("Verigy creation of Employee", async () => {
//        await addemployee.createEmployee(addemployeedata.firstname, addemployeedata.lastname)
//        await addemployee.verifySuccess()
//     })
//      test("Verify  Error Messages for Mandatoryu fileds", async () => {

//         await addemployee.verifyErrorMsgMandatoryFileds()

//     })
    
// })