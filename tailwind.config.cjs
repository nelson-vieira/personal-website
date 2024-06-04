// SPDX-License-Identifier: AGPL-3.0-or-later
// @license GNU Affero General Public License version 3 or later <https://www.gnu.org/licenses/agpl-3.0.txt>
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            screens: {
                "vsm": "340px",
            },
        },
    },
    plugins: [],
}
