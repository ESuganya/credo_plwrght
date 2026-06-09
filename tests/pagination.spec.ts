import { test, expect } from '@playwright/test'


test('Pagination', async ({ page }) => {

    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');
    
    
    
    while (true) {
        const rows = await page.locator('#example tbody tr').all();
        for (const r of rows) {
            const name=await r.locator('td').allInnerTexts();
            if(name.includes('Airi Satou'))
            {
                console.log('Airi Satou Information',name )
            }
            //console.log(await r.innerText())
        }

        const next = page.getByRole('link', { name: 'Next' });
        const isNextDisable = await next.isDisabled();
        if (isNextDisable) {
            break;
            
        }else
        {
            await next.click();
        }

    }



})