<script>
	import FaStackOverflow from 'svelte-icons/fa/FaStackOverflow.svelte';
	import FaRedditAlien from 'svelte-icons/fa/FaRedditAlien.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import WorkItem from 'src/components/work-item.svelte';
	import FaSteam from 'svelte-icons/fa/FaSteam.svelte';
	import Link from 'src/components/link.svelte';
	import Img from 'src/components/img.svelte';
</script>

<article class="flex w-full max-w-lg flex-col gap-5 p-10 pb-40 pt-8 sm:pb-5">
	<section>
		<div class="-mb-5 flex justify-between">
			<div class="my-1">
				<h1 class="font-tnr text-4xl font-bold md:text-5xl">Mar Santos</h1>
				<p>Digital Craftsman</p>
			</div>
			<Img
				src="/images/suntoes.png"
				alt="suntoes"
				className="w-[7.25rem] h-[7.25rem] !rounded-full object-cover shadow-lg border-[0.2rem] border-solid border-white dark:border-neutral-900"
			/>
		</div>
	</section>
	<section id="about">
		<h3
			class="mb-1 font-tnr text-3xl font-bold underline decoration-gray-300 underline-offset-[0.2em]"
		>
			About
		</h3>
		<p class="mb-3 indent-4">
			Yo, Mar is a JavaScript developer based in <Link
				className="text-blue-600"
				underline="hover"
				href="https://seasia.co/2023/02/19/this-is-why-the-philippines-is-known-as-the-pearl-of-the-orient-seas"
				>the Pearl of the Orient Seas</Link
			>. Experienced with <Link
				className="text-blue-600"
				underline="hover"
				href="https://nextjs.org/">Next.js 14</Link
			> and <Link className="text-blue-600" underline="hover" href="https://vuejs.org/">Vue 3</Link
			>, he sure know his way around frontend and most stuff in the backend with <Link
				className="text-blue-600"
				underline="hover"
				href="https://nodejs.org/en">Node.js</Link
			>. If coding by the book/instructions isn&lsquo;t enough for you, Mar codes intuitively to get
			the most out of your app. Currently, he is living off of programming 9-5s alongside his
			<Link
				className="text-blue-600"
				underline="hover"
				href="https://www.instagram.com/stories/highlights/17925953123887356/">cats</Link
			> and works on a beat-up <Link
				className="text-blue-600"
				underline="hover"
				href="https://www.instagram.com/p/C630YGpyfZZ/">car</Link
			> and <Link
				className="text-blue-600"
				underline="hover"
				href="https://www.instagram.com/p/C4IJjalLgLz/?img_index=1">bike</Link
			> as projects for leisure.
		</p>
		<div class="mx-auto -mb-1 mt-3 flex justify-center sm:w-1/2">
			<WorkItem
				id="item-instagram"
				title="Portfolio"
				description="View all my work stuff"
				img="/images/meows-pad.png"
				status="in progress"
				pathname="/works"
			/>
		</div>
	</section>
	<section id="bio">
		<h3
			class="mb-1 font-tnr text-3xl font-bold underline decoration-gray-300 underline-offset-[0.2em]"
		>
			Bio
		</h3>
		<div class="flex gap-4">
			<p class="font-bold">2002</p>
			<p class="flex-1">Born in Jeddah, Saudi Arabia</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">2019 to 2021</p>
			<p class="flex-1">
				Studied STEM at <Link
					className="text-blue-600"
					underline="hover"
					href="https://www.linkedin.com/school/pamantasan-ng-lungsod-ng-valenzuela/?originalSubdomain=ph"
					>PLV</Link
				>
			</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">2020 to 2022</p>
			<p class="flex-1">Worked as a PC technician</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">2021</p>
			<p class="flex-1">
				Dropped BSEE at <Link
					className="text-blue-600"
					underline="hover"
					href="https://www.linkedin.com/school/pamantasan-ng-lungsod-ng-valenzuela/?originalSubdomain=ph"
					>PLV</Link
				> to learn code
			</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">2022</p>
			<p class="flex-1">
				Worked at <Link className="text-blue-600" underline="hover" href="https://www.noblemen.com/"
					>Noblemen LLC</Link
				> as Junior Dev
			</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">2022 to present</p>
			<p class="flex-1">
				Studies BSCS at <Link
					className="text-blue-600"
					underline="hover"
					href="https://www.linkedin.com/school/our-lady-of-fatima-university/">OLFU</Link
				>
			</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">2023</p>
			<p class="flex-1">
				Worked at <Link className="text-blue-600" underline="hover" href="/works/saber-liquidation"
					>Saber Liquidation</Link
				>, <Link className="text-blue-600" underline="hover" href="/works/giftcardx">GiftCardX</Link
				>, and <Link className="text-blue-600" underline="hover" href="/works/dash-rd">Dash RD</Link
				>; Hints of backend development, along mostly frontend experiences with different teams of
				no more than 5 man
			</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">2024 to present</p>
			<p class="flex-1">Works at <Link
				className="text-blue-600"
				underline="hover"
				href="/works/confidential"><i>confidential</i></Link
			> as Full-stack Dev</p>
		</div>
	</section>

	<section id="i-heart">
		<h3
			class="mb-1 font-tnr text-3xl font-bold underline decoration-gray-300 underline-offset-[0.2em]"
		>
			I &lt;3
		</h3>
		<p class="indent-4">
			Coffee, Sleeping, Manga, Philosophy, <Link
				className="text-blue-600"
				underline="hover"
				href="https://friend.chess.com/LytQf">Chess</Link
			>, Anime/TV/Film Series, <Link
				className="text-blue-600"
				underline="hover"
				href="https://www.instagram.com/suntoez/">Cars</Link
			>, and <Link
				className="text-blue-600"
				underline="hover"
				href="https://www.instagram.com/suntoez/">Motorcycles</Link
			>
		</p>
	</section>

	<section id="on-the-web" class="mb-40 sm:mb-0">
		<h3
			class="mb-1 font-tnr text-3xl font-bold underline decoration-gray-300 underline-offset-[0.2em]"
		>
			On the web
		</h3>
		<div class="mb-3 mt-1.5 flex flex-col gap-1">
			<Link
				underline="hover"
				href="https://github.com/suntoes"
				className="flex gap-2 items-center text-blue-600"
			>
				<div class="h-4 w-4 transition ease-in-out hover:rotate-[20deg]">
					<FaGithub />
				</div>
				<p>@suntoes</p>
			</Link>
			<Link
				underline="hover"
				href="https://stackoverflow.com/users/18373031/suntoes"
				className="flex gap-2 items-center text-blue-600"
			>
				<div class="h-4 w-4 transition ease-in-out hover:rotate-[20deg]">
					<FaStackOverflow />
				</div>
				<p>suntoes</p>
			</Link>
			<Link
				underline="hover"
				href="https://steamcommunity.com/id/suntoess"
				className="flex gap-2 items-center text-blue-600"
			>
				<div class="h-4 w-4 transition ease-in-out hover:rotate-[20deg]">
					<FaSteam />
				</div>
				<p>suntoes</p>
			</Link>
			<Link
				underline="hover"
				href="https://www.linkedin.com/in/mar-santos/"
				className="flex gap-2 items-center text-blue-600"
			>
				<div class="h-4 w-4 transition ease-in-out hover:rotate-[20deg]">
					<FaLinkedin />
				</div>
				<p>Mar Santos</p>
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
