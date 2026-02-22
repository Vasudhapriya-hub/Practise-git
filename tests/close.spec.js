import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cleartrip.com');
  await page.waitForTimeout(3000);
  await page.click('div[class="pb-1 px-1 flex flex-middle nmx-1"]');
  await page.waitForTimeout(5000);
});

