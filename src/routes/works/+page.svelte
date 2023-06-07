<script>
	import WorkList from 'src/components/work-list.svelte';
	import WorkItem from 'src/components/work-item.svelte';
	import { works } from 'src/utils/works';
</script>

<div class="p-5">
	<div class="pb-10 pt-5 sm:ml-4">
		*<span class="text-sky-600 dark:text-sky-400">Done</span>,{' '}
		<span class="text-lime-600 dark:text-lime-400">Active</span>,{' '}
		<span class="text-yellow-600 dark:text-yellow-400"> In progress </span>
		, and <span class="text-red-600 dark:text-red-400">Inactive</span>
		.
	</div>
	<div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
		{#each works as work}
			<WorkList title={work.title}>
				{#each work.items as item}
					<WorkItem
						id={'item-' + item.pathname.replace(/\//g, '')}
						title={item.title}
						description={item.description}
						img={item.img}
						status={item.status}
						pathname={item.pathname}
					/>
				{/each}
			</WorkList>
		{/each}
	</div>
</div>
