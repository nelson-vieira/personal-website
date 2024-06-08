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
        <div class="m-0 pt-4 pr-4 pb-0 pl-4 border-0 text-[100%] align-baseline
        h-full bg-gradient-to-b from-slate-900 to-stone-900/95
        vsm:pt-16 vsm:pr-16 vsm:pl-16
        sm:!pt-20 sm:!pr-20 sm:!pl-20 sm:to-stone-950/95
        md:!pt-24 md:!pr-24 md:!pl-24
        xl:!pt-20 xl:!pr-20 xl:!pl-20
        2xl:!pt-32 2xl:!pr-32 2xl:!pl-32">
            <div id="content" class="m-0 p-0 border-0 text-[100%] align-baseline
            min-h-full flex flex-col">
                <div class="mb-auto pt-0 pr-0 pb-16 pl-0 border-0 text-[100%] align-baseline
                flex-grow flex-shrink-0 basis-auto flex flex-col
                sm:pb-20">
                    <div class="mt-0 mr-[1vw] mb-10 ml-[1vw] p-0 border-0 text-[100%] align-baseline
                    flex-grow-0 flex-shrink-0 basis-auto flex flex-row items-center
                    vsm:mr-[2vw] vsm:ml-[2vw]
                    sm:mr-[3vw] sm:ml-[3vw]
                    md:mr-[4vw] md:ml-[4vw]
                    lg:mr-[2vw] lg:ml-[2vw]
                    xl:mr-[5vw] xl:ml-[5vw]
                    2xl:mr-[10vw] 2xl:mb-20 2xl:ml-[10vw]">
                        <div id="titles" class="mr-2 p-0 border-0 text-[100%] align-baseline">
                            <h1 class="m-0 p-0 border-0 text-[15vw] align-baseline
                            leading-none font-bold text-zinc-100
                            dark:text-zinc-100
                            vsm:text-6xl
                            sm:text-8xl
                            lg:text-[7rem]
                            xl:text-9xl
                            2xl:text-[9rem]">
                                Nelson Vieira
                            </h1>
                            <h2 class="mt-0 mr-0 mb-0 ml-10 p-0 border-0 text-[4.5vw] align-baseline
                            leading-none text-zinc-100
                            dark:text-zinc-100
                            vsm:text-base
                            sm:ml-24 sm:text-2xl
                            md:ml-28
                            xl:ml-32">
                                Software Engineer
                            </h2>
                        </div>
                        <div id="links" class="mt-0 mr-0 mb-0 ml-auto p-0 border-0 text-[100%] align-baseline
                        flex justify-center">
                            <a href="https://github.com/nelson-vieira" class="m-0 p-0 border-0 text-[5vw] align-baseline
                            !leading-none text-zinc-100
                            vsm:text-xl
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
                        flex flex-row flex-wrap gap-8 justify-center items-center
                        sm:gap-10
                        md:gap-20
                        xl:flex-nowrap
                        2xl:gap-48">
                            <img src="../favicon.ico" alt="Nelson Vieira" width="255px" height="255px" class="m-0 p-0 border-0 text-[100%] align-baseline
                            w-[18vw] h-auto
                            vsm:w-20
                            sm:w-40
                            md:w-52
                            2xl:w-64">
                            <div class="m-0 p-0 border-0 text-[100%] align-baseline">
                                <p class="m-0 p-0 border-0 text-[3.5vw] align-baseline
                                leading-none text-zinc-100
                                dark:text-zinc-100
                                vsm:text-sm
                                sm:text-lg
                                md:text-xl">
                                    I'm just a guy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-3 pl-0 border-0 text-[100%] align-baseline
                bg-transparent flex-grow-0 flex-shrink-0 basis-auto
                vsm:pb-6">
                    <p class="m-0 p-0 border-0 text-[3vw] align-baseline
                    leading-none text-zinc-100 text-center
                    dark:text-zinc-100
                    vsm:text-xs
                    md:text-sm
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
                    <p class="m-0 p-0 border-0 text-[3vw] align-baseline
                    leading-none text-zinc-100 text-center
                    dark:text-zinc-100
                    vsm:text-xs
                    md:text-sm
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
                    <p class="m-0 p-0 border-0 text-[3vw] align-baseline
                    leading-none text-zinc-100 text-center
                    dark:text-zinc-100
                    vsm:text-xs
                    md:text-sm
                    2xl:text-base">
                        &copy; 2023-2024 Nelson Vieira
                    </p>
                </footer>
            </div>
        </div>
    </div>
</div>
