import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.qaplayground.com/practice/input');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox',{name:'Enter hollywood movie name '}).type('abcdef');
  await page.waitForTimeout(3000);
  let value = await page.getByRole('textbox',{name:'Enter hollywood movie name '}).inputValue();
  await page.waitForTimeout(3000);
  console.log ('the value in the textbox is : ' + value);
});

