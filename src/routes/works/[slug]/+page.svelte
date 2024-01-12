<script>
	import Link from 'src/components/link.svelte';
	import Img from 'src/components/img.svelte';
	import cn from 'classnames';

	export let data;
	const { work } = data;
	const deets = work?.deets || [];
</script>

<article class="flex w-full max-w-lg flex-col gap-5 px-10 py-10">
	<h1 class="mb-2">
		<Link className="text-blue-600" underline="hover" href="/works">Works</Link> &gt;
		<span class="font-tnr text-4xl font-bold">{work.title}</span>
	</h1>
	<section>
		<p class="mb-2 indent-4">{work.description || work.outline}</p>
	</section>
	<section class="mb-40 flex flex-col gap-5 sm:mb-0">
		<div>
			{#each deets as deet}
				<div class="ml-4 flex gap-4">
					<p class="font-bold">{deet.title}</p>
					<p class={cn('flex-1', deet?.href ? 'break-all' : '')}>
						{#if deet?.href}
							<Link icon={true} className="text-blue-600" underline="hover" href={deet?.href}
								>{deet?.description || deet?.href}</Link
							>
						{:else}
							{deet?.description}
						{/if}
					</p>
				</div>
			{/each}
		</div>

		{#each work.img as img}
			<div class="relative aspect-[16/9] w-full">
				<Img
					src={img}
					alt={work.title}
					className="w-full object-cover border-[1px] border-gray-100 shadow-md h-full absolute"
				/>
			</div>
		{/each}
	</section>
</article>
