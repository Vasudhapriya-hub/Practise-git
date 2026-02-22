import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.qaplayground.com/practice/input');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox',{name:'Enter hollywood movie name '}).type('abcdef');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox',{name:'Enter hollywood movie name '}).clear();
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Append a text and press' }).type('ghijkl');
  await page.waitForTimeout(3000);
});

