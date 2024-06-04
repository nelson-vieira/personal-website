<!---
SPDX-License-Identifier: AGPL-3.0-or-later

Copyright (c) 2024 Nelson Vieira

@author Nelson Vieira <hello@nelsonvieira.me>
@license AGPL-3.0 <https://www.gnu.org/licenses/agpl-3.0.txt>
--->
<svelte:head>
	<title>Nelson Vieira</title>
    <meta name="Description" content="Personal website of Nelson Vieira" />
    <meta property="og:url" content="https://nelsonvieira.me" />
    <meta property="og:title" content="Nelson Vieira" />
    <meta property="og:description" content="Personal website of Nelson Vieira" />
    <meta property="og:type" content="website" />
    <!-- <meta property="og:image" content="" />
    <meta property="og:image:width" content="" />
    <meta property="og:image:height" content="" /> -->
    <meta name="twitter:title" content="Nelson Vieira" />
    <meta name="twitter:description" content="Personal website of Nelson Vieira" />
    <!-- <meta name="twitter:image" content="" />
    <meta name="twitter:image:alt" content="" /> -->
</svelte:head>
<script>
    import img from "$lib/assets/images/purple_and_yellow_abstract_painting.jpg";
</script>
<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
<div class="m-0 p-0 border-0 text-[100%] align-baseline
absolute w-full h-full" role="img" aria-label="Purple and yellow abstract painting"
style="background-image: url({img}); background-size: cover; background-repeat: no-repeat;"></div>
<div id="content" class="m-0 p-0 border-0 text-[100%] align-baseline
relative min-h-screen flex flex-col justify-center items-center">
    <div class="mt-auto p-0 border-0 text-[100%] align-baseline
    flex flex-col flex-nowrap justify-center items-center text-center">
        <div id="titles" class="m-0 p-0 border-0 text-[100%] align-baseline">
            <h1 class="m-0 p-0 border-0 text-[4.5vw] align-baseline
            font-bold text-zinc-100
            dark:text-zinc-100
            hover:text-green-500 hover:bg-gray-800/20
            vsm:text-3xl">
                Hi there, I'm Nelson Vieira
            </h1>
            <br>
            <h2 class="m-0 p-0 border-0 text-[4.5vw] align-baseline
            font-bold text-zinc-100
            dark:text-zinc-100
            hover:text-red-600 hover:bg-gray-800/20
            vsm:text-2xl">
                Welcome to my domain
            </h2>
            <br>
        </div>
        <div id="text" class="m-0 p-0 border-0 text-[100%] align-baseline">
            <p class="m-0 p-0 border-0 text-[4.5vw] align-baseline
            text-zinc-100
            dark:text-zinc-100
            hover:text-orange-300 hover:bg-gray-800/20
            vsm:text-xl">
                Coming soon&#8482; in the next 30 years...
            </p>
            <br>
            <a href="https://github.com/nelson-vieira" class="m-0 p-0 border-0 text-[5vw] align-baseline
            text-zinc-100 !leading-none
            vsm:text-base
            sm:!text-3xl
            hover:text-zinc-800
            visited:text-zinc-100" title="GitHub">
                <i class="lni lni-github-original"></i>
            </a>
        </div>
    </div>
    <div class="mt-auto p-0 border-0 text-[100%] align-baseline
    bg-transparent">
        <p class="m-0 p-0 border-0 text-[4vw] align-baseline
        text-zinc-100 text-center
        dark:text-zinc-100
        vsm:text-base">
            Background photo by <a href="https://unsplash.com/@lazycreekimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" class="m-0 p-0 border-0 text-[100%] align-baseline
            text-blue-400
            hover:underline
            focus:text-blue-700
            active:no-underline active:text-blue-950
            visited:text-blue-400">Michael Dziedzic</a> on <a href="https://unsplash.com/pt-br/fotografias/0W4XLGITrHg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" class="m-0 p-0 border-0 text-[100%] align-baseline
            text-blue-400
            hover:underline
            focus:text-blue-700
            active:no-underline active:text-blue-950
            visited:text-blue-400">Unsplash</a>.
        </p>
        <p class="m-0 p-0 border-0 text-[4vw] align-baseline
        text-zinc-100 text-center
        dark:text-zinc-100
        vsm:text-base">
            Page content licensed under a
            <a href="https://creativecommons.org/licenses/by/4.0/legalcode.txt" class="m-0 p-0 border-0 text-[100%] align-baseline
            text-blue-400
            hover:underline
            focus:text-blue-700
            active:no-underline active:text-blue-950
            visited:text-blue-400">
                CC-BY-4.0 license</a>.
            <a href="https://github.com/nelson-vieira/personal-website" class="m-0 p-0 border-0 text-[100%] align-baseline
            text-blue-400
            hover:underline
            focus:text-blue-700
            active:no-underline active:text-blue-950
            visited:text-blue-400">
                Source code</a> licensed under a
            <a href="https://www.gnu.org/licenses/agpl-3.0.txt" class="m-0 p-0 border-0 text-[100%] align-baseline
            text-blue-400
            hover:underline
            focus:text-blue-700
            active:no-underline active:text-blue-950
            visited:text-blue-400">
                AGPL-3.0-or-later license</a>.
        </p>
    </div>
</div>
