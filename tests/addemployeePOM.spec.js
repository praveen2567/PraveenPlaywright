import { test, expect } from '@playwright/test'
import { loginPage } from '../pageObjects/loginpage.po'
import logindata from "./testData/login.json"
import { addEmployeePage } from '../pageObjects/addemployeepage.po'
import addemployeedata from './testData/addemployee.json'
let page // i want to share the same page for every object 
let login
let addemployee
test.describe("Verify Login Functionality", async () => {
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage() // this will create a page 
        login = new loginPage(page)
        addemployee = new addEmployeePage(page)
        await login.launchUrl()
        await login.loginwithcreds(logindata.username, logindata.password)
        await login.loginSuccess()
        await addemployee.navigatePIM()
        await addemployee.navigateAddEmployee()
    })
    test("Verigy creation of Employee", async () => {
       await addemployee.createEmployee(addemployeedata.firstname, addemployeedata.lastname)
       await addemployee.verifySuccess()
    })
     test("Verify  Error Messages for Mandatoryu fileds", async () => {

        await addemployee.verifyErrorMsgMandatoryFileds()

    })
    
})