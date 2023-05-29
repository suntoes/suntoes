<script>
	import { Motion } from 'svelte-motion';
	import { onMount } from 'svelte';
	import cn from 'classnames';

	import Link from 'src/components/link.svelte';

	export let id;
	export let title;
	export let description;
	export let img;
	export let status;
	export let pathname;

	let titleWidth = 1;
	let hovered = false;

	const bgColor =
		status === 'done'
			? 'bg-sky-400 dark:bg-sky-600'
			: status === 'active'
			? 'bg-lime-400 dark:bg-lime-600'
			: status === 'in progress'
			? 'bg-yellow-400 dark:bg-yellow-600'
			: 'bg-red-400 dark:bg-red-600';

	function handleBreakpointChange() {
		const itemTitle = document.getElementById(id);
		if (itemTitle) titleWidth = Math.round(itemTitle.offsetWidth) + 5;
	}

	onMount(() => {
		handleBreakpointChange();
	});
</script>

<svelte:window on:resize={handleBreakpointChange} />

<Link href={pathname} underline={false} id="work-item">
	<div
		class="flex h-fit cursor-pointer flex-row gap-4 sm:flex-col sm:gap-1"
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
		on:focus={() => (hovered = true)}
		on:blur={() => (hovered = false)}
	>
		<div class="min-w-[150px] max-w-[150px] flex-1 sm:max-w-full sm:pl-4">
			<img
				src={img}
				alt={title}
				class="h-24 w-full rounded-tl-3xl object-cover shadow-sm md:h-28"
				style="opacity: {hovered ? 0.5 : 1}"
			/>
		</div>
		<div class="-mt-5 flex w-fit flex-col justify-end pt-10 sm:w-auto sm:pt-0">
			<div class="relative">
				<Motion
					let:motion
					initial={{ width: 0 }}
					animate={{ width: hovered ? 0 : 'auto' }}
					exit={{ width: 0 }}
					transition={{ delay: 0.2 }}
				>
					<div class="z-1 absolute flex -translate-x-8 overflow-hidden sm:translate-x-0" use:motion>
						<div id="gago" style="min-width: {titleWidth}px">
							<p class={cn('w-fit px-1 text-xl', bgColor)}>{title}</p>
						</div>
					</div>
				</Motion>
				<p {id} class="w-fit -translate-x-8 px-1 text-xl sm:translate-x-0">{title}</p>
			</div>
			<p>{description}</p>
		</div>
	</div>
</Link>
