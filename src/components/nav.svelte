<script lang="ts">
	import ThemeButton from 'src/components/theme-button.svelte';
	import MerryGo from 'src/components/merry-go.svelte';
	import Link from 'src/components/link.svelte';
	import { routeList } from 'src/utils/works';

	export let url;
</script>

<div class="fixed bottom-0 left-0 z-[99] flex w-screen items-end justify-center">
	<div class="absolute flex w-screen max-w-5xl items-end justify-end">
		<div class="relative w-full">
			<div class="absolute bottom-0 right-0 max-w-full">
				<MerryGo />
			</div>
			<div
				class="absolute bottom-0 right-0 flex max-w-full gap-5 rounded-tl-3xl p-5 backdrop-blur-md"
			>
				{#each routeList as route}
					<Link
						href={route.path}
						underline={url === route.path ? true : 'hover'}
						className="!text-neutral-900 dark:!text-white"
					>
						{route.title}
					</Link>
				{/each}
				<span>
					<Link
						href="https://github.com/suntoes/suntoes"
						underline="hover"
						className="!text-neutral-900 dark:!text-white"
					>
						<div class="flex items-center gap-1">
							<div class="-mr-1 mt-1 h-4 w-4">
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									role="img"
									viewBox="0 0 24 24"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
									><title /><path
										d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"
									/></svg
								>
							</div>
							ource
						</div>
					</Link>
				</span>
				<Link
					href="https://drive.google.com/file/d/1P-QtXUHQew5u_RU5mfLLIT9m3-hi0lVq/view?usp=sharing"
					underline="hover"
					className="!text-neutral-900 dark:!text-white">Resume</Link
				>
				<ThemeButton />
			</div>
		</div>
	</div>
</div>
