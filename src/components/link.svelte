<script lang="ts">
  import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte'
	import cn from 'classnames';

	export let underline: boolean | 'hover' = true;
	export let className = '';
  export let icon = false;
	export let href = '';
	export let id = '';
</script>

<a
	{id}
	{href}
	class={cn(
		'w-fit cursor-pointer text-blue-600 hover:opacity-50 dark:text-rose-400',
		className,
		!!underline &&
			(underline === 'hover' ? 'hover:underline' : 'underline') +
				' decoration-[2px] underline-offset-[3px] md:underline-offset-[5px]'
	)}
>
	<slot />
  {#if icon}
    <div class='inline-block w-4 h-4 translate-y-1 ml-1'>
      <FaExternalLinkAlt />
    </div>
  {/if}
</a>
