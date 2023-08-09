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
			? 'bg-sky-500 dark:bg-sky-500'
			: status === 'active'
			? 'bg-lime-500 dark:bg-lime-500'
			: status === 'in progress'
			? 'bg-yellow-500 dark:bg-yellow-500'
			: 'bg-red-500 dark:bg-red-500';

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
		<div class="aspect-w-16 aspect-h-9 min-w-[150px] max-w-[150px] flex-1 sm:max-w-full sm:pl-4">
			<Img
				src={img}
				alt={title}
				className="h-24 w-full object-cover shadow-lg shadow-sm md:h-28"
				style="opacity: {hovered ? 0.5 : 1}"
			/>
		</div>
		<div class="-mt-5 flex w-fit flex-col justify-end pt-10 sm:w-auto sm:pt-0">
			<div class="relative">
				<p {id} class="w-fit -translate-x-8 px-1 text-xl font-bold sm:translate-x-0">{title}</p>
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
							<p class={cn('w-fit rounded px-1 text-xl font-bold text-white', bgColor)}>{title}</p>
						</div>
					</div>
				</Motion>
			</div>
			<p class="text-sm">{description}</p>
		</div>
	</div>
</Link>
