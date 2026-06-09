//Locators - identify the web elements

//DOM - Document Object Model

//Playwright built in locators
//CSS locator/selector
//Xpath

import {test, expect, Locator} from '@playwright/test'

test("Verify the Playwright Locators", async ({page})=>{

    /* await page.goto("https://demo.nopcommerce.com/");

    //page.getByAltText  - Identify the images

    const logo:Locator=page.getByAltText("nopCommerce demo store");

   await expect(logo).toBeVisible();

   //page.getByText() - visible text

   const text:Locator=page.getByText(/welcome to/i);
   await expect(text).toBeVisible();

   //page.getByRole  - identify by its role

   const registerLink:Locator=page.getByRole('link', {name: 'Register'});

   await registerLink.click(); */

   await page.goto("https://testautomationpractice.blogspot.com/");
   

   //getbylabel- locate by its label text
    //await  page.getByLabel("Email Address:").fill("ABC")


   //getbyplaceholder - attribute

   //await page.getByPlaceholder('Enter Name').fill("Suganya")

   //getbytestid

   await page.goto("file:///C:/Users/sugan/Downloads/app.html")

    

   const profileSummary:Locator=page.getByTestId('profile-email');

  // await page.pause();

   await expect(profileSummary).toBeVisible();

  


 

})