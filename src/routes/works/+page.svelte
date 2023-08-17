<script>
	import WorkList from 'src/components/work-list.svelte';
	import WorkItem from 'src/components/work-item.svelte';
	import { works } from 'src/utils/works';
</script>

<article class="w-full p-10 pb-40 pt-5 sm:w-fit sm:pb-20">
	<div class="pb-5 pt-5 text-center sm:ml-4">
		*<span class="text-sky-600 dark:text-sky-400">Done</span>,{' '}
		<span class="text-lime-600 dark:text-lime-400">Active</span>,{' '}
		<span class="text-yellow-600 dark:text-yellow-400"> In progress </span>
		, and <span class="text-red-600 dark:text-red-400">Inactive</span>
		.
	</div>
	<div class="mb-40 grid grid-cols-1 gap-10 sm:mb-0 md:grid-cols-2 xl:gap-20">
		{#each works as work, index}
			<WorkList
				title={work.title}
				className={index % 2 ? 'row-span-2 flex flex-col justify-center' : ''}
			>
				{#each work.items as item}
					<WorkItem
						id={'item-' + item.id}
						title={item.title}
						description={item.outline}
						img={item.img[0]}
						status={item.status}
						pathname={'/works/' + item.id}
					/>
				{/each}
			</WorkList>
		{/each}
	</div>
</article>
