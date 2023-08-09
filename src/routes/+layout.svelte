<script>
	import { fly } from 'svelte/transition';
	import 'src/app.css';

	import Nav from 'src/components/nav.svelte';
	export let data;
</script>

<head>
	<title>{data.url !== '/' ? 'Works - suntoes' : 'suntoes'}</title>
</head>
<Nav url={data.url} />
{#key data.url}
	<main
		in:fly={{ y: 25, duration: 250, delay: 250 }}
		out:fly={{ y: 25, duration: 250 }}
		class="mx-auto flex min-h-screen items-center justify-center"
	>
		<slot />
	</main>
{/key}
