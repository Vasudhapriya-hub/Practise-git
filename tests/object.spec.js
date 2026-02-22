import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
  await page.waitForTimeout(3000);
  page.locator("//div[text()='Samsung galaxy s6']").click();
    await page.waitForTimeout(3000);
 
});

