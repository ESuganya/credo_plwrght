
//Browser -- > context -- Page

//Browser - instance(Chromium, firefox or webkit)
//Context - a user session - we can have multiple context
//Page - New Tab/New Page
import { test, expect, Locator, firefox } from '@playwright/test'

test('Browser', async ({ browser }) => {

    const brname=await firefox.launch();
    const context=await brname.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();

    await page1.goto('https://www.amazon.in/')
    await page2.goto('https://www.flipkart.com/')

    //await page1.pause();
    const pgs=context.pages();     //Array of pages
    console.log("No of pages opened:", context.pages().length)







})