//Grouping - group ur testcases based on its feature, page or functionality

import{test, expect, Locator, firefox} from '@playwright/test'

/* test.describe('Login Scenarios', async ()=>{
    test('Valid Login', async()=>{
        console.log("Valid Login")
    })

    test('Invalid Login', async()=>{
        console.log("InValid Login")
    })

    test.beforeAll('BeforeAll', async()=>{
   // const browser=await firefox.launch()
    console.log("Test Suite Started")
})
test.afterAll('After All', async({browser})=>{
    await browser.close()
    console.log("Test Suite Stopped")
})
test.beforeEach('Before Each', async({page})=>{
    console.log("Test Started")
    await page.goto('https://testautomationpractice.blogspot.com/')
})
test.afterEach('After Each', async()=>{
    console.log("Test Stopped")
})

}) */

//Hooks - 
//Annotations - 

/* test.only('Test only', async()=>{})
test.skip('Test Skipped', async()=>{})
test.fail('Test Failed', async()=>{})
test.fixme('Test Fixme', async()=>{})

test('Test slow', async()=>{
    test.slow();  //3*default time
}) */

//Tags 

test.describe.configure({mode:'serial'})
test('Login', {tag:['@smoke', '@Regression']}, async()=>{

    console.log("Smoke Testcasdes")
})

test('Product Info', {tag:'@Regression'}, async()=>{

    console.log("Regression Testcasdes")

})

test('Cart', {tag:'@Regression'}, async()=>{

    console.log("Smoke Testcasdes")
})

test('Logout', {tag:'@smoke'}, async()=>{

    console.log("Smoke Testcasdes")
})

