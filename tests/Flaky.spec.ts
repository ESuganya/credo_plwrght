import{test, expect, Locator} from '@playwright/test'

test('Flaky', async ({page,context})=>{
   
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.pause();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Welcome admin' })).toBeVisible();

})

test('2nd script', async ({page,context})=>{
  
  await page.goto('https://www.demoblaze.com/');

})

test('3rd script', async ({page,context})=>{
   
  await page.goto('https://www.demoblaze.com/');
 
})
test('4th script', async ({page,context})=>{
   
  await page.goto('https://www.demoblaze.com/');

  

})