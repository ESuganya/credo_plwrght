import { test, expect } from '@playwright/test';
import fs from 'fs'

test('Download',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')
    await page.locator('#inputText').fill('Welcome to download')
    await page.locator('#generateTxt').click();
    const downldPath='download/sample.txt'
    const fileExists=await fs.existsSync(downldPath)   //true or false
    if(fileExists)
    {
        await fs.unlinkSync(downldPath)
    }
    const [download]=await Promise.all([page.waitForEvent('download'),
    page.locator('#txtDownloadLink').click()])
    await download.saveAs(downldPath);
    //await expect(await fs.existsSync(downldPath))
    await expect(downldPath).toBeTruthy()


})


