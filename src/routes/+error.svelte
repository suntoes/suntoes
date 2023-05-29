<script>
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import Socials from 'src/components/socials.svelte';
	import Link from 'src/components/link.svelte';
</script>

<div class="w-full">
	<h1 class="mb-2 text-6xl">
		404, <span class="leading-0 text-3xl">Not found.</span>
	</h1>
	<div class="flex justify-end gap-2">
		<Socials />
		<p>|</p>
		<Link href="/" underline={false}>
			<div class="h-6 w-6">
				<FaHome />
			</div>
		</Link>
	</div>
</div>
