const {test, expect} = require('@playwright/test')
const { request } = require('http')
import addempdata from '../testData/addemployeepayload.json'
const fs = require('fs')

const storage = JSON.parse(fs.readFileSync('.auth/user.json', 'utf-8'));
const orangeCookie = storage.cookies.find(cookie => cookie.name === 'orangehrm');
const savedCookieValue = orangeCookie?.value;


test('Reqres Post API', async ({ request }) => { // we need only this fixture

    const AddUser = await request.post("https://reqres.in/api/users", { 
        headers : {
            "x-api-key" : "reqres-free-v1"
        },
        data : {
            "name": "Raju",
            "job": "Trainer"
        }
    })
    console.log(await AddUser.json()) 

})
// here now i am able to trigger the request and get the response
// we need to write assertions for that name is raju or not status is 201 or not
// {
//   name: 'Raju',
//   job: 'Trainer',
//   id: '523',
//   createdAt: '2025-07-10T07:59:22.566Z'
// }
//   1 passed (6.1s)

test("Orange HRM Get API", async ({request}) => {
    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits"
    const headerspart = {
         "cookie": `orangehrm=${savedCookieValue}`
    }
    const subunits = await request.get(url, {headers : headerspart})

    expect(subunits.ok()).toBeTruthy()
  expect(subunits.status()).toBe(200);
  console.log(await subunits.json())
})


test('Orange HRM POST  API', async ({ request }) => {

    const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'

    const headerspart = {

         "cookie": `orangehrm=${savedCookieValue}`

    }

    let randomtext = (Math.random() + 1).toString(36).substring(7); 

    console.log(randomtext)
    addempdata.employeeId = randomtext


    const createEmployee = await request.post(url, {
        headers: headerspart, 
        data: addempdata
    })

    //expect(createEmployee.ok()).toBeTruthy();
     expect(createEmployee.status()).toBe(200)
    console.log(await createEmployee.json())

})