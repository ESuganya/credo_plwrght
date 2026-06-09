import { test, expect, firefox } from '@playwright/test';

test('Shadow Dom',async ()=>{

    const browser=await firefox.launch();
    const context=await browser.newContext(
        {
            viewport:{width:100, height:100},
            locale:'en-US',
            proxy:{server:'http://myproxy.com:8080'},
            ignoreHTTPSErrors:true
        }
    );

    const page=await context.newPage();
    await page.goto('https://watir.com/examples/shadow_dom.html')
    await page.pause();
    
    


    



})