import{test, expect,FrameLocator, Locator} from "@playwright/test";


test('Drag and Drop' , async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    const drag=page.locator("#column-a");
    const drop=page.locator("#column-b");
    drag.dragTo(drop);

})