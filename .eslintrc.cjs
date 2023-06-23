// SPDX-License-Identifier: GPL-3.0-or-later
//
// Copyright (c) 2023 Nelson Vieira
//
// @author Nelson Vieira <hello@nelsonvieira.me>
// @license GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['svelte3', '@typescript-eslint'],
    ignorePatterns: ['*.cjs'],
    overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
    settings: {
        'svelte3/typescript': () => require('typescript')
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    }
};
