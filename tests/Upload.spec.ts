import { test, expect } from '@playwright/test';

test('Upload',async ({page})=>{

    //Single File Upload
    await page.goto('https://testautomationpractice.blogspot.com/')
    const chooseSingle=page.locator('#singleFileInput')
    await chooseSingle.setInputFiles('C:/Users/ADITYA/OneDrive/Desktop/dynamicWebtable.txt')
    //chooseSingle.setInputFiles('test-results/dynamicWebtable.txt')
    await page.getByRole('button', {name:'Upload Single File'}).click()
    const singleFileText=await page.locator('#singleFileStatus').textContent();
    await expect(singleFileText).toContain('dynamicWebtable.txt')

    //Multilple File Upload
    const chooseMultiple=await page.locator('#multipleFilesInput');
    await page.pause();
    await chooseMultiple.setInputFiles(['C:/Users/ADITYA/OneDrive/Desktop/dynamicWebtable.txt',
                                'C:/Users/ADITYA/OneDrive/Desktop/InstallationScreenshots.docx'])
    await page.getByRole('button', {name:'Upload Multiple Files'}).click();
    const multipleFileText=await page.locator('#multipleFilesStatus').textContent();
    expect(multipleFileText).toContain('dynamicWebtable.txt')
    expect(multipleFileText).toContain('InstallationScreenshots.docx')



})