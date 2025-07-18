import { expect } from '@playwright/test'

//in this class we have a constructor methods variables 
exports.loginPage = class loginPage{

    constructor(page){
        this.page = page //here we store/save the object page
        this.username = page.locator('input[name="username"]') //css
        this.password = page.locator('//input[@name="password"]') //xpath
        this.loginButton = page.locator('//button[@type="submit"]')
        this.logo = page.getByAltText('company-branding')
        this.loginerror = page.locator("//p[text()='Invalid credentials']")
        //now the constructor is ready for us
    }
    //methods
    async launchUrl(){          //async can be used here to solve promise and use in somewhere
        await this.page.goto("/web/index.php/auth/login") //instead of page we use this.page we assign to page right //whatever the page we send to constructor we are assign to this page
    }

    async loginwithcreds(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async loginError(){
        await expect(this.loginerror).toBeVisible()
    }

    async loginSuccess(){
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index") 
    }
}
