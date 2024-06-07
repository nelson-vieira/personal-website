<!--
SPDX-License-Identifier: AGPL-3.0-or-later
SPDX-FileCopyrightText: Copyright 2023-2024 Nelson Vieira

@author Nelson Vieira <hello@nelsonvieira.me>
@license GNU Affero General Public License version 3 or later <https://www.gnu.org/licenses/agpl-3.0.txt>
-->
<svelte:head>
	<title>Nelson Vieira</title>
    <meta name="Description" content="Personal website of Nelson Vieira" />
    <link type="text/plain" rel="author" href="{$page.url.origin}/humans.txt" />
    <meta property="og:url" content="{$page.url.origin}" />
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
    <link rel="canonical" href="{$page.url.origin+$page.url.pathname}" />
</svelte:head>
<script>
    import { page } from '$app/stores';
    import img from "$lib/assets/images/purple_and_yellow_abstract_painting.jpg";
</script>
<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
<div class="m-0 p-0 border-0 text-[100%] align-baseline
relative h-full font-['Jost']">
    <div class="m-0 p-0 border-0 text-[100%] align-baseline
    absolute w-full h-full -z-10" role="img" aria-label="Purple and yellow abstract painting"
    style="background-image: url({img}); background-size: cover; background-repeat: no-repeat;"></div>
    <div class="m-0 pt-0 border-0 text-[100%] align-baseline
    relative h-full bg-zinc-800/50 z-50">
        <div class="m-0 pt-32 pr-32 pb-0 pl-32 border-0 text-[100%] align-baseline
        h-full bg-gradient-to-b from-slate-900 to-stone-950/95">
            <div id="content" class="m-0 p-0 border-0 text-[100%] align-baseline
            min-h-full flex flex-col">
                <div class="mb-auto pt-0 pr-0 pb-20 pl-0 border-0 text-[100%] align-baseline
                flex-grow flex-shrink-0 basis-auto flex flex-col">
                    <div class="mt-0 mr-[10vw] mb-0 ml-[10vw] p-0 border-0 text-[100%] align-baseline
                    flex-grow-0 flex-shrink-0 basis-auto flex flex-row items-center">
                        <div id="titles" class="m-0 p-0 border-0 text-[100%] align-baseline">
                            <h1 class="m-0 p-0 border-0 text-[4.5vw] align-baseline
                            font-bold text-zinc-100
                            dark:text-zinc-100
                            vsm:text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                            xl:text-8xl
                            2xl:text-[9rem] 2xl:leading-none">
                                Nelson Vieira
                            </h1>
                            <h2 class="ml-32 p-0 border-0 text-[4.5vw] align-baseline
                            text-zinc-100
                            dark:text-zinc-100
                            vsm:text-lg
                            xl:text-xl
                            2xl:text-2xl">
                                Software Engineer
                            </h2>
                        </div>
                        <div id="links" class="mt-0 mr-0 mb-0 ml-auto p-0 border-0 text-[100%] align-baseline
                        flex justify-center">
                            <a href="https://github.com/nelson-vieira" class="m-0 p-0 border-0 text-[5vw] align-baseline
                            text-zinc-100 !leading-none
                            vsm:text-base
                            sm:!text-3xl
                            hover:text-zinc-300
                            visited:text-zinc-100" title="GitHub">
                                <i class="lni lni-github-original"></i>
                            </a>
                        </div>
                    </div>
                    <div id="text" class="mt-auto mr-0 mb-auto ml-0 p-0 border-0 text-[100%] align-baseline
                    flex-grow-0 flex-shrink-0 basis-auto">
                        <div class="m-0 p-0 border-0 text-[100%] align-baseline
                        flex flex-row gap-48 justify-center items-center">
                            <img id="favicon1" src="../favicon.ico" alt="Nelson Vieira">
                            <div class="m-0 pt-0 pr-0 pb-0 pl-0 border-0 text-[100%] align-baseline">
                                <p class="m-0 p-0 border-0 text-[4.5vw] align-baseline
                                text-zinc-100
                                dark:text-zinc-100
                                vsm:text-base
                                xl:text-lg
                                2xl:text-xl">
                                    I'm just a guy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-6 pl-0 border-0 text-[100%] align-baseline
                bg-transparent flex-grow-0 flex-shrink-0 basis-auto">
                    <p class="m-0 p-0 border-0 text-[4vw] align-baseline
                    text-zinc-100 text-center
                    dark:text-zinc-100
                    vsm:text-xs
                    xl:text-sm
                    2xl:text-base">
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
                        visited:text-blue-400">Unsplash</a>, licensed under a <a href="https://unsplash.com/license" class="m-0 p-0 border-0 text-[100%] align-baseline
                        text-blue-400
                        hover:underline
                        focus:text-blue-700
                        active:no-underline active:text-blue-950
                        visited:text-blue-400">Unsplash license</a>.
                    </p>
                    <p class="m-0 p-0 border-0 text-[4vw] align-baseline
                    text-zinc-100 text-center
                    dark:text-zinc-100
                    vsm:text-xs
                    xl:text-sm
                    2xl:text-base">
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
                    <p class="m-0 p-0 border-0 text-[4vw] align-baseline
                    text-zinc-100 text-center
                    dark:text-zinc-100
                    vsm:text-xs
                    xl:text-sm
                    2xl:text-base">
                        &copy; 2023-2024 Nelson Vieira
                    </p>
                </footer>
            </div>
        </div>
    </div>
</div>
