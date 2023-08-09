<script>
	import Link from 'src/components/link.svelte';

	export let data;
	const { work } = data;
</script>

<article class="flex w-full max-w-lg flex-col gap-5 px-5 py-10">
	<h1 class="mb-2">
		<Link className="text-blue-600" underline="hover" href="/works">Works</Link> &gt;
		<span class="text-4xl">{work.title}</span>
	</h1>
	<section>
		<p class="mb-2 indent-4">{work.description || work.outline}</p>
	</section>
	<section class="mb-40 flex flex-col gap-5 sm:mb-0">
		<div>
			<div class="ml-4 flex gap-4">
				<p class="font-bold">Website</p>
				<p class="flex-1">
					<Link className="text-blue-600" underline="hover" href={work.link}>{work.link}</Link>
				</p>
			</div>
			<div class="ml-4 flex gap-4">
				<p class="font-bold">Tech/Tools</p>
				<p class="flex-1">
					{work.stack.join(', ')}
				</p>
			</div>
		</div>

		{#each work.img as img}
			<div class="aspect-w-16 aspect-h-9 w-full">
				<img src={img} alt={work.title} class="w-full object-cover shadow-lg" />
			</div>
		{/each}
	</section>
</article>
