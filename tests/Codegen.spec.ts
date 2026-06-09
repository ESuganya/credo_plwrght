//CodeGen

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  //await page.pause()
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Suganyayyyyyyyyyyyyy');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('8787788');
  await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await expect(page.locator('#post-body-1307673142697428135')).toContainText('Name:');
 // await expect(page.getByRole('textbox', { name: 'Enter Name' })).toHaveValue('John');
});