import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cleartrip.com');
  await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);
  await page.getByRole('checkbox').check();
  await page.waitForTimeout(5000);
});

