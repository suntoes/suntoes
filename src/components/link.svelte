<script lang="ts">
	import cn from 'classnames';

	export let underline: boolean | 'hover' = true;
	export let className = '';
	export let href = '';
	export let id = '';
</script>

<a
	{id}
	{href}
	class={cn(
		'w-fit cursor-pointer hover:opacity-50',
		className,
		!!underline &&
			(underline === 'hover' ? 'hover:underline' : 'underline') +
				' decoration-[2px] underline-offset-[3px] md:underline-offset-[5px]'
	)}
>
	<slot />
</a>
