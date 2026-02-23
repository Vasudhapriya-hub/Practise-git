import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.waitForTimeout(3000);
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright');
  await page.waitForTimeout(3000);
  await page.getByText('playwright', { exact: true }).click();
});

