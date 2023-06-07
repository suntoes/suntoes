<script>
	import Socials from 'src/components/socials.svelte';
	import Link from 'src/components/link.svelte';
</script>

<div class="w-full max-w-lg p-5">
	<h1 class="text-8xl">
		Yo, <span class="text-4xl">I'm Mar.</span>
	</h1>
	<p class="mb-2">
		I wrote my first line of code at{' '}
		<Link href="https://www.freecodecamp.org/">freeCodeCamp.org</Link> back in Nov 2021, got hooked to
		it ever since.
	</p>
	<p class="mb-2">
		Now currently a developer for{' '}
		<Link href="https://saberliquidation.com/">Saber Liquidation</Link>,{' '}
		<Link href="https://frontend-repo-lemon.vercel.app/">GiftCardX</Link>{' '}
		and <Link href="https://dashrd.com/">Dash RD</Link>, a contributor to{' '}
		<Link href="https://y2.digital/">y2 Digital</Link>, and a computer science student at <Link
			href="https://www.fatima.edu.ph/">OLFU</Link
		>. I do <Link href="/works">projects</Link> for fun and a living.
	</p>
	<p class="mb-2">
		Off the screen, I love to biphasically sleep, read manga, watch some series, and ride my{' '}
		<Link href="https://www.instagram.com/suntoez/">motorcycle</Link>.
	</p>
	<div class="flex justify-end gap-2">
		<Socials />
	</div>
</div>
