import { test, expect,Locator } from '@playwright/test'

test('Keyboard Actions', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const input1= page.locator('#input1')
    await input1.focus();
    await page.keyboard.insertText("Welcome")

    await page.keyboard.down('Control')
    await page.keyboard.press('A')
    await page.keyboard.up('Control')

    await page.keyboard.down('Control')
    await page.keyboard.press('C')
    await page.keyboard.up('Control')

    const input2=page.locator('#input2')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    await page.keyboard.down('Control')
    await page.keyboard.press('V')
    await page.keyboard.up('Control')

    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await page.pause();







})