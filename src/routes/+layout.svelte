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
		in:fly={{ y: 100, duration: 250, delay: 250 }}
		out:fly={{ y: 100, duration: 250 }}
		class="mx-auto flex min-h-screen max-w-lg items-center justify-center p-5 pb-20"
	>
		<slot />
	</main>
{/key}
