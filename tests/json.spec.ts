/// <reference types="node"/>
import { test, expect } from '@playwright/test'
import fs from 'fs'

//Read testdata from JSON File
const jsonPath = 'testdata/testdata.json'
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

for (const dt of data) {
    test(`Login with ${dt.username}`, async ({ page }) => {
        await page.goto('https://www.demoblaze.com/');
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.locator('#loginusername').fill(dt.username);
        await page.locator('#loginpassword').fill(dt.password);
        await page.getByRole('button', { name: 'Log in' }).click();
        await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Welcome' })).toBeVisible();

    });
}


