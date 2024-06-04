// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright 2023-2024 Nelson Vieira
//
// @author Nelson Vieira <hello@nelsonvieira.me>
// @license GNU Affero General Public License version 3 or later <https://www.gnu.org/licenses/agpl-3.0.txt>
import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
});
