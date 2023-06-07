<script>
	export let title;
</script>

<div class="max-w-md">
	<h1 class="text-6xl sm:ml-4">{title}</h1>
	<div id="work-list" class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
		<slot />
	</div>
</div>
