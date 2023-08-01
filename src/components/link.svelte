<script>
	import cn from 'classnames';

	export let underline = true;
	export let href;
	export let id;
</script>

<a
	{id}
	{href}
	class={cn(
		'cursor-pointer hover:opacity-50',
		!!underline &&
			(underline === 'hover' ? 'hover:underline' : 'underline') +
				' decoration-[2px] underline-offset-[3px] md:underline-offset-[5px]'
	)}
>
	<slot />
</a>
