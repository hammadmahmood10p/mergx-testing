import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://on-demand-creds-operations.shiftmedqa.com/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).fill('hammad.mahmood@10pearls.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('10Pearls10+');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('heading', { name: 'Users' }).click();
  await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();
});