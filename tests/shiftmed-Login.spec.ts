import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(process.env.SHIFTMED_BASE_URL + '/login');;
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.SHIFTMED_EMAIL ?? '');;
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.SHIFTMED_PASSWORD ?? '');
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.SHIFTMED_PASSWORD ?? '');
  await page.page.getByRole('textbox', { name: 'Password' }).fill(process.env.SHIFTMED_PASSWORD ?? '');
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.SHIFTMED_PASSWORD ?? '');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('heading', { name: 'Users' }).click();
  await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();
});