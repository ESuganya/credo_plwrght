import {test, expect} from '@playwright/test';

//syntax  : test("Name of the test", ()=>{} )

//Fixtures - global variables - page, browser

test("Verify Title", async ({page})=>{

     await page.goto("https://playwright.dev/")

     await page.pause()

    let pageTitle=await page.title();

    console.log("Title of the page:", pageTitle);

    await expect(page).toHaveTitle(/playwright/i)

})



//Synchronous - sequence - java and python
//Asynchronous - occurs independently 

//Promise - pending, fulfilled/resolved, rejected

