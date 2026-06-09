//CSS Locators - identify the webelements 

//Absolute
//Relative 

//tag with id                                       tag#id /  #id
//tag with class            tag.classname    / .classname
//tag with attribute            tag[attribute='value']
//tag with class and attribute  tag.classname[attribute='value']

import{test, expect, Locator} from '@playwright/test'

test('CSS Locator', async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    
    await page.locator('.search-box-text').fill('mobiles');

    await page.pause();

    await page.locator('.item-box').first().click();


    



})