<script>
	import FaRedditAlien from 'svelte-icons/fa/FaRedditAlien.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import WorkItem from 'src/components/work-item.svelte';
	import Link from 'src/components/link.svelte';
</script>

<article class="flex w-full max-w-lg flex-col gap-5 p-5 pb-40 pt-10 sm:pb-5">
	<section>
		<h1 class="relative mb-1 flex h-40 items-end text-8xl text-white">
			<span class="z-10 px-4">Yo, <span class="text-4xl font-semibold">I'm Mar.</span></span>
			<img
				src="/images/this-guy.png"
				alt="suntoes"
				class="absolute w-full object-cover shadow-lg"
			/>
		</h1>
		<p class="mb-2 indent-4">
			A developer and a BSCS student. After self-learning for 5 months, I started accepting
			<Link className="text-blue-600" underline="hover" href="/works">projects</Link> as a freelancer.
			I'm front-end heavy with just the right amount of knowledge and experience to back-end. React is
			what I use with TypeScript, but this site is made with Svelte for fun.
		</p>
		<div class="-mb-1 mt-3 flex justify-center">
			<Link href="/works">
				<button class="bg-yellow-500 px-1 text-xl font-semibold text-white">
					&gt; View my works
				</button>
			</Link>
		</div>
	</section>
	<section>
		<p class="mb-1 text-4xl font-semibold">Bio</p>
		<div class="flex gap-4">
			<p class="font-bold">Aug 2002</p>
			<p class="flex-1">Born in Jeddah, K.S.A.</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">Jun 2019</p>
			<p class="flex-1">Studied STEM at PLV</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">Feb 2020</p>
			<p class="flex-1">Worked as an independent PC technician</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">Apr 2022</p>
			<p class="flex-1">
				Worked at <Link className="text-blue-600" underline="hover" href="https://www.noblemen.com/"
					>Noblemen LLC</Link
				> as a Junior Dev
			</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">Aug 2022 to present</p>
			<p class="flex-1">Studies BSCS at OLFU</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">Feb 2023</p>
			<p class="flex-1">
				Worked at <Link
					className="text-blue-600"
					underline="hover"
					href="https://www.saberliquidation.com/">Saber Liquidation</Link
				>
			</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">Mar 2023 to present</p>
			<p class="flex-1">
				Works at <Link className="text-blue-600" underline="hover" href="https://dashrd.com"
					>Dash RD</Link
				>
			</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">Jun 2023 to present</p>
			<p class="flex-1">
				Works at <Link
					className="text-blue-600"
					underline="hover"
					href="https://frontend-repo-lemon.vercel.app">GiftCardX</Link
				>
			</p>
		</div>
	</section>

	<section>
		<p class="mb-1 text-4xl font-semibold">I &lt;3</p>
		<p class="indent-4">
			Coffee, Sleeping, Manga, Anime/TV/Film Series,
			<Link className="text-blue-600" underline="hover" href="https://www.instagram.com/suntoez/"
				>Motorcycle</Link
			>, Photography, and Programming
		</p>
	</section>

	<section class="mb-40 sm:mb-0">
		<p class="mb-1 text-4xl font-semibold">On the web</p>
		<div class="mb-3 mt-1 flex flex-col gap-1">
			<Link
				underline="hover"
				href="https://github.com/suntoes"
				className="flex gap-2 items-center text-blue-600"
			>
				<div class="mt-0.5 h-4 w-4 transition ease-in-out hover:rotate-[20deg]">
					<FaGithub />
				</div>
				<p>@suntoes</p>
			</Link>
			<Link
				underline="hover"
				href="https://reddit.com/u/offthepader"
				className="flex gap-2 items-center text-blue-600"
			>
				<div class="h-4 w-4 transition ease-in-out hover:rotate-[20deg]">
					<FaRedditAlien />
				</div>
				<p>u/offthepader</p>
			</Link>
			<Link
				underline="hover"
				href="https://www.linkedin.com/in/mar-santos/"
				className="flex gap-2 items-center text-blue-600"
			>
				<div class="mt-0.5 h-4 w-4 transition ease-in-out hover:rotate-[20deg]">
					<FaLinkedin />
				</div>
				<p>Mar Santos</p>
			</Link>
		</div>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<WorkItem
				id="item-instagram"
				title="Instagram"
				description="My shenanigans dump"
				img="/images/links/instagram.png"
				status="done"
				pathname="https://www.instagram.com/suntoez"
			/>
			<WorkItem
				id="item-youtube"
				title="Youtube"
				description="Random vids I make"
				img="/images/links/youtube.png"
				status="inactive"
				pathname="https://www.youtube.com/@suntoes"
			/>
		</div>
	</section>
</article>
