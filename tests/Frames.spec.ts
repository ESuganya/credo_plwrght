import { test, expect, Locator } from '@playwright/test'

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frameInPage=page.frames()   //array of frames
    console.log('No of Frames:',frameInPage.length)

    //Approach 1 - using page.frame()

    const frame1=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

    if(frame1)
    {
        await frame1.locator("input[name='mytext1']").fill('Suganya')
    }
    else
    {
        console.log("frame1 is not found")
    }

   

    //Approach 2 - using page.framelocator()
    const frame2=page.frameLocator("frame[src='frame_2.html']");
    if(frame2)
    {
        await frame2.locator("input[name='mytext2']").fill("John")
    }

    const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    if(frame3)
    {
        const child=frame3.childFrames();
        console.log("Child frames count", child.length)
        const text=child[0].getByText('Form Filling Demo Page');
        await expect(text).toBeVisible()

    }
     await page.pause()




})