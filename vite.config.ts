// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright 2023-2024 Nelson Vieira <hello@nelsonvieira.me>
//
// @license GNU Affero General Public License version 3 or later <https://www.gnu.org/licenses/agpl-3.0.txt>
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
