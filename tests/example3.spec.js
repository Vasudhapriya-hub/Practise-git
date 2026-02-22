import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.cleartrip.com/');
  await page.waitForTimeout(3000);
  await page.getByTestId('closeIcon').click();
  await page.waitForTimeout(4000);
  await page.getByRole('radio', { name: 'Round trip' }).click();
  await page.waitForTimeout(3000);
});