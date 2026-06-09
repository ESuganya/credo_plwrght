//Xpath - XML Path Language 

//Absolute Xpath - full path from the root to target element - /
//Relative Xpath - target element - //

//Syntax - //tagname[@attribute='value']

//Xpath Axes - relationship between the current node and nodes in the dom

//self
//parent 


import { test, expect,Locator } from '@playwright/test'

test('Xpath Locator', async ({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

    const search:Locator=page.locator("//input[@id='small-searchterms' or @value='Search store']");

    await search.fill("John");

    await page.pause()


})