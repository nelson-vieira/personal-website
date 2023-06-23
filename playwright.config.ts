// SPDX-License-Identifier: GPL-3.0-or-later
//
// Copyright (c) 2023 Nelson Vieira
//
// @author Nelson Vieira <hello@nelsonvieira.me>
// @license GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    webServer: {
        command: 'npm run build && npm run preview',
        port: 4173
    },
    testDir: 'tests'
};

export default config;
