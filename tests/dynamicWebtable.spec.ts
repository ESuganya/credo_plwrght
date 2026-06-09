import {test, expect} from '@playwright/test'


test('dynamicWebtable', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const rows=await page.locator('#taskTable tbody tr').all();
    expect(rows).toHaveLength(4);
    let cpu='';
/* 
    for(const r of rows)
    {
       const processName= await r.locator('td').first().innerText();
       if(processName === 'Chrome')
       {
            cpu=await r.locator('td', {hasText:'%' }).innerText();
            console.log('Chrome CPU in table is', cpu);
            break;
       }
    } */

    cpu=await page.locator('#taskTable tbody tr', {hasText:'Chrome'}).locator('td', {hasText:'%' }).innerText();
    const ChromeCPU=await page.locator('.chrome-cpu').innerText();
    console.log('Chrom value outside table', ChromeCPU)
    expect(ChromeCPU).toContain(cpu)



})