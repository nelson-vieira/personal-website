// SPDX-License-Identifier: GPL-3.0-or-later
//
// Copyright (c) 2023 Nelson Vieira
//
// @author Nelson Vieira <hello@nelsonvieira.me>
// @license GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>
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
