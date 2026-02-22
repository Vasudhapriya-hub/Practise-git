import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.waitForTimeout(5000);

  let  texts=await page.locator('div[class="card-block"]').allInnerTexts();
  console.log(texts);

});

