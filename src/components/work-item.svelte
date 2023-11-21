<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { onMount } from 'svelte';
	import cn from 'classnames';

	import Link from 'src/components/link.svelte';
	import Img from 'src/components/img.svelte';

	export let id: string;
	export let title: string;
	export let description: string;
	export let img: string;
	export let status: string;
	export let pathname: string;

	let titleWidth = 1;
	let hovered = false;

	const bgColor =
		status === 'done'
			? 'bg-sky-500 dark:bg-sky-400'
			: status === 'active'
			? 'bg-lime-500 dark:bg-lime-400'
			: status === 'in progress'
			? 'bg-yellow-500 dark:bg-yellow-400'
			: 'bg-red-500 dark:bg-red-400';

	function handleBreakpointChange() {
		const itemTitle = document.getElementById(id);
		if (itemTitle) titleWidth = Math.round(itemTitle.offsetWidth) + 5;
	}

	onMount(() => {
		handleBreakpointChange();
	});
</script>

<svelte:window on:resize={handleBreakpointChange} />

<Link href={pathname} underline={false} id="work-item" className="w-full">
	<div
		class="flex h-fit cursor-pointer flex-row gap-2 text-neutral-900 dark:text-white sm:flex-col sm:gap-1"
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
		on:focus={() => (hovered = true)}
		on:blur={() => (hovered = false)}
	>
		{#if !!img}
			<div
				class="aspect-[16/9] min-w-[150px] max-w-[150px] flex-1 sm:min-w-full sm:max-w-full sm:pl-4"
			>
				<Img
					src={img}
					alt={title}
					className="w-full h-full object-cover shadow-md border-[1px] border-neutral-300 dark:border-neutral-900"
					style="opacity: {hovered ? 0.5 : 1}"
				/>
			</div>
		{/if}
		<div class="-mt-5 flex w-fit flex-col justify-end pt-10 sm:w-auto sm:pt-0">
			<div class="relative break-all">
				<p
					{id}
					class="w-fit -translate-x-8 px-1 text-xl font-bold text-neutral-900 dark:text-white sm:translate-x-0"
				>
					{title}
				</p>
				<Motion
					let:motion
					initial={{ width: 0 }}
					animate={{ width: hovered ? 0 : 'auto' }}
					exit={{ width: 0 }}
					transition={{ delay: 0.2 }}
				>
					<div
						class="z-1 absolute top-0 flex -translate-x-8 overflow-hidden sm:translate-x-0"
						use:motion
					>
						<div id="gago" style="min-width: {titleWidth}px">
							<p
								class={cn(
									'w-fit rounded px-1 text-xl font-bold text-white dark:text-neutral-900',
									bgColor
								)}
							>
								{title}
							</p>
						</div>
					</div>
				</Motion>
			</div>
			<p class="mt-0.5 text-sm sm:mt-1">{description}</p>
		</div>
	</div>
</Link>
