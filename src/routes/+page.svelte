<!---
SPDX-License-Identifier: AGPL-3.0-or-later

Copyright (c) 2023 Nelson Vieira

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
    <meta name="twitter:title" content="Nelson Vieira">
    <meta name="twitter:description" content="Personal website of Nelson Vieira">
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
relative w-screen h-screen
selection:text-blue-500 selection:bg-gray-50" role="img" aria-label="Purple and yellow abstract painting"
style="background-image: url({img}); background-size: cover; background-repeat: no-repeat;">
    <div class="m-0 p-0 border-0 text-[100%] align-baseline
    flex flex-col flex-nowrap justify-center items-center w-screen h-screen text-center">
        <div id="titles" class="m-0 p-0 border-0 text-[100%] align-baseline">
            <h1 class="m-0 p-0 border-0 text-[4.5vw] align-baseline
            font-bold text-white
            hover:text-gray-500 hover:bg-gray-800/20
            vsm:text-3xl">
                Hi there, I'm Nelson Vieira
            </h1>
            <br>
            <h2 class="m-0 p-0 border-0 text-[4.5vw] align-baseline
            font-bold text-white
            hover:text-gray-600 hover:bg-gray-800/20
            vsm:text-2xl">
                Welcome to my domain
            </h2>
            <br>
        </div>
        <div id="content" class="m-0 p-0 border-0 text-[100%] align-baseline">
            <p class="m-0 p-0 border-0 text-[4.5vw] align-baseline
            text-white
            hover:text-gray-700 hover:bg-gray-800/20
            vsm:text-xl">
                Coming soon&#8482; in the next 30 years...
            </p>
            <br>
            <a href="https://github.com/nelson-vieira" class="m-0 p-0 border-0 text-[4.5vw] align-baseline
            text-gray-200 underline
            vsm:text-base
            sm:!text-3xl
            hover:text-gray-800
            visited:text-gray-200" title="GitHub">
                <i class="lni lni-github-original"></i>
            </a>
        </div>
    </div>
    <span class="m-0 p-0 border-0 text-[100%] align-baseline
    hidden absolute bottom-0 text-white">
        Background photo by<a href="https://unsplash.com/@lazycreekimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" class="m-0 p-0 border-0 text-[100%] align-baseline
        text-blue-500 underline">Michael Dziedzic</a> on <a href="https://unsplash.com/pt-br/fotografias/0W4XLGITrHg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" class="m-0 p-0 border-0 text-[100%] align-baseline
        text-blue-500 underline">Unsplash</a>
    </span>
</div>
