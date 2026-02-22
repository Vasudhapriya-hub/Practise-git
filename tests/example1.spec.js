import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.qaplayground.com/practice/input');
  await page.getByRole('textbox',{name:'Enter hollywood movie name '}).type('abcdef');
  await page.waitForTimeout(3000);
  let res=  await page.getByRole('textbox',{name:'Enter hollywood movie name '}).inputValue();
    console.log(typeof(res));
    await page.waitForTimeout(3000);
    
});