<script>
	import { onMount } from 'svelte';
	import cn from 'classnames';
	export let src;
	export let alt;
	export let className;

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = src;
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

{#if loaded}
	<img {src} {alt} class={cn(className, ' rounded-xl')} />
{:else if failed}
	<div class={cn(className, 'relative rounded-xl !shadow-none !drop-shadow-none')}>
		<svg
			class="absolute mx-auto h-full w-full text-4xl text-gray-400"
			stroke="currentColor"
			fill="currentColor"
			stroke-width="0"
			viewBox="0 0 512 512"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"
			/></svg
		>
	</div>
{:else if loading || !loading}
	<div class={cn(className, 'relative rounded-xl !shadow-none !drop-shadow-none')}>
		<svg
			class="absolute mx-auto h-full w-full text-gray-400"
			version="1.1"
			id="L9"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 100 100"
			enable-background="new 0 0 0 0"
			xml:space="preserve"
		>
			<path
				fill="currentColor"
				d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
			>
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					dur="1s"
					from="0 50 50"
					to="360 50 50"
					repeatCount="indefinite"
				/>
			</path>
		</svg>
	</div>
{/if}
