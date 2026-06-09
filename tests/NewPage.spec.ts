import { test, expect, Locator, firefox } from '@playwright/test'

test('New Page/Tab', async ({ context }) => {

    const mainpage=await context.newPage();
    await mainpage.goto('https://testautomationpractice.blogspot.com/')

    const childPage=await Promise.all([context.waitForEvent('page'), 
        mainpage.getByRole('button', {name:'New Tab'}).click()])

        //const childpage=['NewPage', 'Void']
        //const [a,b,m]=['Apple', 'Bananna', 'Mango
 
        console.log("Main Page Title:", await mainpage.title())
        await mainpage.pause();
       //console.log("Child Page Title",await childPage.title()) 

       const pgs=await context.pages()    //Array of pages
       console.log('No of Pages Opened', pgs.length)

       /* for(const p of pgs)
       {
        const title=await p.title()
        if(title.includes('SDET'))
        {
            await p.getByRole('textbox', {name: 'search'}).fill('selenium')
        }
       } */

       

       await pgs[0].locator('#name').fill('suganya')
       await mainpage.pause();
       await pgs[1].getByRole('textbox', {name: 'search'}).fill('selenium')
       await mainpage.pause();
       //await pgs[2].locator('').click();





    
    
    


})