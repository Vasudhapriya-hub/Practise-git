import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/#');
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.waitForTimeout(3000);
  let texts=await page.locator('div[class="card-body"] h5').allInnerTexts();
  console.log(texts);
});