import {test, expect, Page} from '@playwright/test'


test('DatePicker', async ({page})=>{

    async function selectDate(yr:string, mnth:string, dt:string, page:Page)
    {
        while(true)
    {
        const monthCal=await page.locator('.ui-datepicker-month').innerText();
        const yearCal=await page.locator('.ui-datepicker-year').innerText();
        const next=page.locator('.ui-datepicker-next');

        if(mnth===monthCal && yr==yearCal)
        {
            break;
        }
        await next.click()

    }

    const datesTable=await page.locator('.ui-datepicker-calendar tbody tr td').all();
    for(const d of datesTable)
    {
        const date=await d.innerText();
        if(date===dt)
        {
            await d.click();
            break;

        }
    }

    }

    await page.goto('https://testautomationpractice.blogspot.com/')

    const datePickr= page.locator('#datepicker');
    await datePickr.click();
    const targetYear='2026'
    const targetMonth='October'
    const targetDate='12'

    await selectDate(targetYear,targetMonth,targetDate,page)
    const expdate='10/12/2026';
    await expect(datePickr).toHaveValue(expdate)

    await page.pause();


})