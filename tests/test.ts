// SPDX-License-Identifier: GPL-3.0-or-later
//
// Copyright (c) 2023 Nelson Vieira
//
// @author Nelson Vieira <hello@nelsonvieira.me>
// @license GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>
import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
});
