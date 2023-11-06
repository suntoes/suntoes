<script>
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let theme = 'light';

	onMount(() => {
		theme = localStorage.theme || 'light';
		mountTheme();
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		mountTheme();
	}

	function mountTheme() {
		const delTheme = theme === 'dark' ? 'light' : 'dark';
		let newTheme = theme;
		const root = document.documentElement;
		root.classList.remove(delTheme);
		root.classList.add(newTheme);
		localStorage.setItem('theme', newTheme);
	}
</script>

<button on:click={toggleTheme}>
	<div class="h-4 w-4">
		{#key theme}
			<div in:fly={{ y: -12.5, duration: 250, delay: 250 }} out:fly={{ y: 12.5, duration: 250 }}>
				{#if theme === 'light'}
					<FaMoon />
				{:else}
					<FaSun />
				{/if}
			</div>
		{/key}
	</div>
</button>
