/*
prerequisite - excel file
npm install xlsx
*/

import { test, expect } from '@playwright/test'
import * as xlsx from 'xlsx'
//import fs from 'fs'

const excelPath = 'testdata/testdat.xlsx'
const workbook=xlsx.readFile(excelPath)

const sheetName=workbook.SheetNames[0]
const worksheet=workbook.Sheets[sheetName]
const logoinTestdata:any=xlsx.utils.sheet_to_json(worksheet)

for (const { username, password } of logoinTestdata) {
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
