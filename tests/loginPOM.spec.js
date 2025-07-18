const {test, expect} = require('@playwright/test')
// import {test, expect} from '@playwright/test'
import { loginPage } from '../pageObjects/loginpage.po'
import logindata from "./testData/login.json"
let page // i want to share the same page for every object 
let login
test.describe("Verify Login Functionality", async () => {
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage() // this will create a page 
        login = new loginPage(page)
        await login.launchUrl()
    })
    test("Verigy Login with valid credentials", async () => {
        await login.loginwithcreds(logindata.username, logindata.password)
        await login.loginSuccess()
    })
    test("Verigy Login with valid username and invalid password", async () => {
        await login.loginwithcreds(logindata.username, logindata.wrongpassword)
        await login.loginError()
    })
    test("Verigy Login with invalid username and valid password", async () => {
        await login.loginwithcreds(logindata.wrongusername, logindata.password)
        await login.loginError()
    })
    test("Verigy Login with invalid  username and invalid password", async () => {
        await login.loginwithcreds(logindata.wrongusername, logindata.wrongpassword)
        await login.loginError()
    })
})