// SPDX-License-Identifier: AGPL-3.0-or-later
// @license AGPL-3.0 <https://www.gnu.org/licenses/agpl-3.0.txt>
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    webServer: {
        command: 'npm run build && npm run preview',
        port: 4173
    },
    testDir: 'tests'
};

export default config;
