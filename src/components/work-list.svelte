<script lang="ts">
	import cn from 'classnames';
	export let title: string;
	export let className = '';
</script>

<div class={cn('max-w-md', className)}>
	<h1 class="text-6xl sm:ml-4">{title}</h1>
	<div id="work-list" class="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
		<slot />
	</div>
</div>
