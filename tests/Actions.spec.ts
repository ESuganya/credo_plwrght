import { test, expect,Locator } from '@playwright/test'

test('Actions', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //TextBox / Input Box

   /*  const nameTextbox:Locator=page.getByPlaceholder('Enter Name');

    await expect(nameTextbox).toBeVisible();

    await expect(nameTextbox).toBeEnabled();

    const maxLengthOfname:string | null =await nameTextbox.getAttribute('maxlength'); 

    expect(maxLengthOfname).toBe('15')

    await nameTextbox.fill('John')

    await page.pause();

    const input=await nameTextbox.inputValue();

    expect(input).toBe('John') */

    //Radio Button

   /*  const maleRadio=page.getByRole('radio', { name: 'Male', exact: true });

    //await maleRadio.check();

   const ischeckMale=await maleRadio.isChecked();

   if(ischeckMale)
   {

    //true 

   }else
   {
        //false
   }

    await expect(maleRadio).not.toBeChecked();

    */

    //Checbox
    //selecting specific checkbox
    /* const sunday=page.getByLabel('Sunday');
    const monday=page.getByLabel('Monday');

    await sunday.check();
    await monday.check();

    await expect(sunday).toBeChecked();
    

    await sunday.uncheck(); */
   
    //Select all checkboxes
    const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const checkboxes=days.map((ele)=> page.getByLabel(ele))

    //checkboxes=[page.getByLabel('Sunday'), page.getByLabel('Monday'), 'page......]

    /* for(const c of checkboxes)
    {
        await c.check();
        await expect(c).toBeChecked();

    }
     */

    //Specific index values
    /* const indexes=[1,3,6]

    for(const ele of indexes)
    {
        await checkboxes[ele].check();
        await expect(checkboxes[ele]).toBeChecked();

    } */

    await page.pause(); 

    //toggle the checkboxes
    for(const checkbx of checkboxes)
    {
        if(await checkbx.isChecked())
        {
           await checkbx.uncheck();
           await expect(checkbx).not.toBeChecked();

        }
        else
        {
            await checkbx.check();
            await expect(checkbx).toBeChecked();

        }
    }

    await page.pause();








   





})