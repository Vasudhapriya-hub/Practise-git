import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
  await page.waitForTimeout(5000);
  await page.selectOption('select', { value: 'IND' });
 await page.waitForTimeout(5000);
});

