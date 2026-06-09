/*

prerequisite - csv file
npm install csv-parse

*/

import { test, expect } from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'

const csvPath='testdata/testdata.csv'
const fileRead=fs.readFileSync(csvPath, 'utf-8')
const loginTestdata:any=parse(fileRead, {columns:true, skip_empty_lines:true})

for (const { username, password } of loginTestdata) {
    test(`Login with ${username}`, async ({ page }) => {
        await page.goto('https://www.demoblaze.com/');
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.locator('#loginusername').fill(username);
        await page.locator('#loginpassword').fill(password);
        await page.getByRole('button', { name: 'Log in' }).click();
        await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Welcome' })).toBeVisible();

    });
}