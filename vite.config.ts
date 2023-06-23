// SPDX-License-Identifier: GPL-3.0-or-later
//
// Copyright (c) 2023 Nelson Vieira
//
// @author Nelson Vieira <hello@nelsonvieira.me>
// @license GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
