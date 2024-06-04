// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright 2023-2024 Nelson Vieira <hello@nelsonvieira.me>
//
// @license GNU Affero General Public License version 3 or later <https://www.gnu.org/licenses/agpl-3.0.txt>
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    webServer: {
        command: 'npm run build && npm run preview',
        port: 4173
    },
    testDir: 'tests'
};

export default config;
