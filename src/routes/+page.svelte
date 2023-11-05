<script>
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
				<h1 class="font-tnr text-5xl font-bold tracking-tight">Mar Santos</h1>
				<p>Digital Craftsman</p>
			</div>
			<Img
				src="/images/suntoes.png"
				alt="suntoes"
				className="w-[7.25rem] h-[7.25rem] !rounded-full object-cover shadow-lg"
			/>
		</div>
	</section>
	<section>
		<h3
			class="mb-1 font-tnr text-3xl font-bold underline decoration-gray-300 underline-offset-[0.2em]"
		>
			About
		</h3>
		<p class="mb-3 indent-4">
			Yo, Mar is a JavaScript developer and a BSCS student based in <Link
				className="text-blue-600"
				underline="hover"
				href="https://seasia.co/2023/02/19/this-is-why-the-philippines-is-known-as-the-pearl-of-the-orient-seas"
				>the Pearl of the Orient Seas</Link
			>. After self-learning for about 5 months, he started accepting <Link
				className="text-blue-600"
				underline="hover"
				href="/works">projects</Link
			> as a freelancer for fun and hobby. Currently along with his
			<Link
				className="text-blue-600"
				underline="hover"
				href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTg3NDM2NTA2MjE3NTc4?igshid=MzRlODBiNWFlZA%3D%3D"
				>cats</Link
			>, he is living off of programming somewhere in the suburbs of the Philippines.
		</p>
		<div class="-mb-1 mt-3 flex justify-center">
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
	<section>
		<h3
			class="mb-1 font-tnr text-3xl font-bold underline decoration-gray-300 underline-offset-[0.2em]"
		>
			Bio
		</h3>
		<div class="flex gap-4">
			<p class="font-bold">Aug 2002</p>
			<p class="flex-1">Born in Jeddah, Saudi Arabia</p>
		</div>
		<div class="flex gap-4">
			<p class="font-bold">Jun 2019</p>
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
			<p class="flex-1">
				Studies BSCS at <Link
					className="text-blue-600"
					underline="hover"
					href="https://www.linkedin.com/school/our-lady-of-fatima-university/">OLFU</Link
				>
			</p>
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
	</section>

	<section>
		<h3
			class="mb-1 font-tnr text-3xl font-bold underline decoration-gray-300 underline-offset-[0.2em]"
		>
			I &lt;3
		</h3>
		<p class="indent-4">
			Coffee, Sleeping, Manga, Anime/TV/Film Series, <Link
				className="text-blue-600"
				underline="hover"
				href="https://www.instagram.com/suntoez/">Cars</Link
			>,
			<Link className="text-blue-600" underline="hover" href="https://www.instagram.com/suntoez/"
				>Motorcycles</Link
			>, Photography, and Programming
		</p>
	</section>

	<section class="mb-40 sm:mb-0">
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
				<div class="h-4 w-4 transition ease-in-out hover:rotate-[20deg]">
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
