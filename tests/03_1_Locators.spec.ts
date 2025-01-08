const { test, expect } = require('@playwright/test');

test('PlayWright Locators Test', async ({page}) => {

await page.goto ('https://practicetestautomation.com/practice-test-login/');
await page.pause();//Pause the execution of the Playwright script
await page.locator('id=username').fill('student');//Fill Username field
await page.locator('id=password').fill('Password123');//Fill Password field
await expect(page.locator('#submit')).toHaveCount(1);//Assertion -Check specified locator appears exactly once on the page
await expect(page.locator('#submit')).toBeVisible();//Assertion -Check the element is visible                                                    
await expect(page.locator('#submit')).toBeEnabled();//Assertion -Check the element is enabled                                                         
await expect(page.locator('#submit')).toHaveText('Submit');//Assertion -Check the element text is equal to the expected text
await expect(page.locator('#submit')).toHaveAttribute('class','btn');//Assertion -Check the element attributes
await expect(page.locator('#submit')).toHaveClass('btn');
await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');//Assertion -Check the URL of the page
await expect(page).toHaveTitle("Test Login | Practice Test Automation");//Assertion -Check the title of the page
await expect(page).toHaveScreenshot('screenshot.png');//Assertion -Visual validation with a screenshot 
await page.locator('#submit').click();//Click Submit button
});
