import{test, expect, Locator} from '@playwright/test'

test('Screenshot,Video and Trace', async ({page,context})=>{
    //await page.goto('https://testautomationpractice.blogspot.com/')
    //1.Capture a screenshot
    // await page.screenshot({path:'Screenshot.jpg'})
    //2.Full page screenshot
    //await page.screenshot({path:'Screenshot.jpg', fullPage:true})
    //3.Capture locator screenshot
    //await page.getByRole('heading',{name:'Automation Testing Practice'}).screenshot({path:'loc.jpg'})
    //Capture screenshot all test
    await context.tracing.start({screenshots:true, snapshots:true})
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Welcome admin' })).toBeVisible();
  await context.tracing.stop({path:'trace.zip'})

})